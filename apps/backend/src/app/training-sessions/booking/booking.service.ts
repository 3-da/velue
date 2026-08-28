import {BadRequestException, ForbiddenException, Injectable} from '@nestjs/common';
import {BookingDto} from './dto/booking-response.dto';
import {PrismaService} from '../../prisma/prisma.service';
import {TRAINING_SESSION} from '@velocity/shared-constants';
import {TrainingSessionsService} from '../training-sessions.service';
import {CreateBookingDto} from './dto/create-booking.dto';
import {Prisma} from '@prisma/client';
import {TrainingSession} from '@velocity/shared-data-access';

@Injectable()
export class BookingService {
  constructor(
    private readonly prisma: PrismaService,
    private trainingSessionsService: TrainingSessionsService,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto, userId: string): Promise<BookingDto> {
    const { trainingSessionId } = createBookingDto;

    try {
      return await this.prisma.$transaction(async tx => {
        const { coinsRequired } = await this.assertSessionHasCapacity(tx, trainingSessionId);
        await this.assertNoExistingBooking(tx, userId, trainingSessionId);

        const balanceAfter = await this.deductCoinsForBooking(tx, userId, coinsRequired);

        const booking = await tx.booking.create({
          data: { userId, trainingSessionId, status: 'CONFIRMED', coinsUsed: coinsRequired },
        });

        await tx.coinsTransaction.create({
          data: {
            userId,
            amount: -coinsRequired,
            type: 'BOOKING_CHARGE',
            description: `Charge for booking ${booking.id}`,
            balanceAfter,
            relatedBookingId: booking.id,
          },
        });

        return booking;
      });
    } catch (error) {
      // A concurrent request can slip past assertNoExistingBooking's read before either
      // side commits; the unique constraint is the real guard, this just gives it a clean 400.
      if (error.code === 'P2002') {
        throw new BadRequestException('Already booked');
      }
      throw error;
    }
  }

  private async assertSessionHasCapacity(
    tx: Prisma.TransactionClient,
    trainingSessionId: string,
  ): Promise<{ coinsRequired: number }> {
    const session = await this.lockSessionRow(tx, trainingSessionId);
    if (!session || session.status !== 'SCHEDULED') {
      throw new BadRequestException('Cannot be booked');
    }

    const activeBookings = await tx.booking.count({
      where: { trainingSessionId, status: { in: ['PENDING', 'CONFIRMED'] } },
    });
    if (activeBookings >= session.maxParticipants) {
      throw new BadRequestException('Cannot be booked');
    }

    return { coinsRequired: session.coinsRequired };
  }

  // FOR UPDATE blocks a second concurrent request for the same session until this
  // transaction commits or rolls back, so the capacity count above is never read
  // out from under a not-yet-committed insert. Prisma's query builder has no way
  // to express a row lock, hence the raw SQL - the template tag still parameterizes
  // trainingSessionId safely.
  private async lockSessionRow(
    tx: Prisma.TransactionClient,
    trainingSessionId: string,
  ): Promise<{ status: string; maxParticipants: number; coinsRequired: number } | undefined> {
    const rows = await tx.$queryRaw<{ status: string; maxParticipants: number; coinsRequired: number }[]>`
      SELECT status, "maxParticipants", "coinsRequired"
      FROM training_sessions
      WHERE id = ${trainingSessionId}
      FOR UPDATE
    `;
    return rows[0];
  }

  private async assertNoExistingBooking(
    tx: Prisma.TransactionClient,
    userId: string,
    trainingSessionId: string,
  ): Promise<void> {
    const existing = await tx.booking.findFirst({
      where: { userId, trainingSessionId, status: { in: ['PENDING', 'CONFIRMED'] } },
    });
    if (existing) {
      throw new BadRequestException('Already booked');
    }
  }

  private async deductCoinsForBooking(
    tx: Prisma.TransactionClient,
    userId: string,
    amount: number,
  ): Promise<number> {
    // Conditional decrement: the `coins: { gte: amount }` guard and the
    // decrement happen in one statement, so two concurrent bookings can never
    // both pass the check and drive the balance negative.
    const deducted = await tx.customer.updateMany({
      where: { userId, coins: { gte: amount } },
      data: { coins: { decrement: amount } },
    });

    if (deducted.count === 0) {
      throw new BadRequestException('Insufficient coins');
    }

    const customer = await tx.customer.findUniqueOrThrow({
      where: { userId },
      select: { coins: true },
    });
    return customer.coins;
  }

  async removeBooking(bookingId: string, requestingUserId: string): Promise<void> {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: { trainingSession: true },
    });

    if (!booking) {
      throw new BadRequestException('Booking not found');
    }

    if (booking.userId !== requestingUserId) {
      throw new ForbiddenException('You can only cancel your own bookings');
    }

    this.validateCancellationTiming(booking.trainingSession);

    await this.prisma.$transaction(async tx => {
      // Delete first: if a concurrent cancellation already removed the row,
      // deleteMany reports 0 and we bail out before refunding a second time.
      const deleted = await tx.booking.deleteMany({ where: { id: bookingId } });
      if (deleted.count === 0) {
        throw new BadRequestException('Booking already cancelled');
      }

      const customer = await tx.customer.update({
        where: { userId: booking.userId },
        data: { coins: { increment: booking.coinsUsed } },
      });

      await tx.coinsTransaction.create({
        data: {
          userId: booking.userId,
          amount: booking.coinsUsed,
          type: 'BOOKING_REFUND',
          description: `Refund for cancelled booking ${bookingId}`,
          balanceAfter: customer.coins,
        },
      });
    });
  }

  private validateCancellationTiming(trainingSession: TrainingSession): void {
    const now = new Date();

    const sessionDateTime = this.trainingSessionsService.getSessionDateTime(
      trainingSession.date,
      trainingSession.startTime,
    );

    const timeDifference = sessionDateTime.getTime() - now.getTime();
    const hoursUntilSession = timeDifference / (1000 * 60 * 60);

    if (hoursUntilSession < TRAINING_SESSION.cancellationHoursAdvance) {
      throw new BadRequestException(
        `Cancellation must be made at least ${TRAINING_SESSION.cancellationHoursAdvance} hours in advance`,
      );
    }
  }
}
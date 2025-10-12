import {BadRequestException, Injectable} from '@nestjs/common';
import {BookingDto} from './dto/booking-response.dto';
import {PrismaService} from '../../prisma/prisma.service';
import {TRAINING_SESSION} from '@velue/shared-constants';
import {CustomerService} from '../../customer/customer.service';
import {TrainingSessionsService} from '../training-sessions.service';
import {CreateBookingDto} from './dto/create-booking.dto';
import {TrainingSession} from '@velue/shared-data-access';

@Injectable()
export class BookingService {
  constructor(
    private readonly prisma: PrismaService,
    private customerService: CustomerService,
    private trainingSessionsService: TrainingSessionsService,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto): Promise<BookingDto> {
    const { trainingSessionId, userId } = createBookingDto;

    const canBeBooked = await this.trainingSessionsService.canBeBooked(trainingSessionId);
    if (!canBeBooked) throw new BadRequestException('Cannot be booked');

    const hasEnoughCoins = await this.customerService.hasEnoughCoins(userId, TRAINING_SESSION.coinsRequired);
    if (!hasEnoughCoins) throw new BadRequestException('Insufficient coins');

    const hasExistingBooking = await this.hasExistingBooking(userId, trainingSessionId);
    if (hasExistingBooking) throw new BadRequestException('Already booked');

    return this.prisma.$transaction(async tx => {
      await this.customerService.deductCoins(userId, TRAINING_SESSION.coinsRequired, tx);

      return tx.booking.create({
        data: {
          userId,
          trainingSessionId,
          status: 'CONFIRMED',
          coinsUsed: TRAINING_SESSION.coinsRequired,
        },
      });
    });
  }

  private async hasExistingBooking(userId: string, trainingSessionId: string): Promise<boolean> {
    const existing = await this.prisma.booking.findFirst({
      where: { userId, trainingSessionId, status: { in: ['PENDING', 'CONFIRMED'] } },
    });
    return !!existing;
  }

  async removeBooking(bookingId: string): Promise<void> {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: { trainingSession: true },
    });

    if (!booking) {
      throw new BadRequestException('Booking not found');
    }

    this.validateCancellationTiming(booking.trainingSession);

    await this.prisma.$transaction(async tx => {
      await this.customerService.addCoins(booking.userId, booking.coinsUsed, tx); // Give back coins to user
      await tx.booking.delete({
        where: { id: bookingId },
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

    if (hoursUntilSession < 24) {
      throw new BadRequestException('Cancellation must be made at least 24 hours in advance');
    }
  }
}
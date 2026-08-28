import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DEMO_DAILY_SCHEDULE, DEMO_SESSION_WINDOW_DAYS, TRAINING_SESSION } from '@velocity/shared-constants';
import { TrainingSession } from '@velocity/shared-data-access';
import { PrismaService } from '../prisma/prisma.service';

function startOfUtcDay(date: Date): Date {
  const truncated = new Date(date);
  truncated.setUTCHours(0, 0, 0, 0);
  return truncated;
}

function addUtcDays(date: Date, days: number): Date {
  const shifted = new Date(date);
  shifted.setUTCDate(shifted.getUTCDate() + days);
  return shifted;
}

/**
 * Keeps the demo schedule perpetually upcoming. `prisma/seed.ts` generates sessions
 * relative to whenever it last ran, so the window goes stale the moment that date
 * passes - but seed.ts is destructive and can't be re-run against real registered
 * users or bookings. This service extends the schedule forward non-destructively:
 * it only ever adds sessions for days past the current furthest date, and never
 * touches an existing row.
 */
@Injectable()
export class DemoScheduleService implements OnModuleInit {
  private readonly logger = new Logger(DemoScheduleService.name);

  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit(): Promise<void> {
    await this.refreshUpcomingSchedule();
  }

  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async refreshUpcomingSchedule(): Promise<void> {
    const missingDates = await this.findMissingScheduleDates();

    if (missingDates.length === 0) {
      return;
    }

    const trainerIds = await this.getTrainerPool();

    if (trainerIds.length === 0) {
      this.logger.warn('Schedule needs extending but no trainers exist yet - skipping');
      return;
    }

    const customerIds = await this.getCustomerPool();
    await this.createSessionsForDates(missingDates, trainerIds, customerIds);

    this.logger.log(`Extended demo schedule by ${missingDates.length} day(s)`);
  }

  private async findMissingScheduleDates(): Promise<Date[]> {
    const latestSession = await this.prisma.trainingSession.aggregate({ _max: { date: true } });
    const today = startOfUtcDay(new Date());
    const horizon = addUtcDays(today, DEMO_SESSION_WINDOW_DAYS);
    const latestDate = latestSession._max.date;
    const from = latestDate ? addUtcDays(startOfUtcDay(latestDate), 1) : today;

    const dates: Date[] = [];
    for (let date = from; date <= horizon; date = addUtcDays(date, 1)) {
      dates.push(date);
    }
    return dates;
  }

  private async getTrainerPool(): Promise<string[]> {
    const trainers = await this.prisma.trainer.findMany({ select: { userId: true } });
    return trainers.map(trainer => trainer.userId);
  }

  private async getCustomerPool(): Promise<string[]> {
    const customers = await this.prisma.customer.findMany({ select: { userId: true } });
    return customers.map(customer => customer.userId);
  }

  /**
   * Creates one TrainingSession per DEMO_DAILY_SCHEDULE slot for each date, then
   * scatters CONFIRMED bookings across them so the demo keeps showing a realistic
   * mix of empty, partially-booked, "Almost full", and "Sold out" rides - the same
   * variety `prisma/seed.ts`'s createRandomBookings() produces on first seed.
   */
  private async createSessionsForDates(dates: Date[], trainerIds: string[], customerIds: string[]): Promise<void> {
    for (const date of dates) {
      for (const slot of DEMO_DAILY_SCHEDULE) {
        const session = await this.createSession(date, slot, trainerIds);
        await this.createRandomBookingsForSession(session, customerIds);
      }
    }
  }

  private createSession(
    date: Date,
    slot: (typeof DEMO_DAILY_SCHEDULE)[number],
    trainerIds: string[],
  ): Promise<TrainingSession> {
    const trainerId = trainerIds[Math.floor(Math.random() * trainerIds.length)];

    return this.prisma.trainingSession.create({
      data: {
        trainingType: slot.type,
        trainerId,
        date,
        startTime: slot.time,
        durationMinutes: TRAINING_SESSION.durationMinutes,
        maxParticipants: TRAINING_SESSION.maxParticipants,
        coinsRequired: TRAINING_SESSION.coinsRequired,
        qrCode: `QR-${date.toISOString().slice(0, 10)}-${slot.time}`,
      },
    });
  }

  /**
   * Mirrors `prisma/seed.ts`'s createRandomBookings(): occupancy is multiplied by
   * maxParticipants + 1 (not maxParticipants) because Math.random() never returns 1,
   * so a session can still land at exactly full capacity and demonstrate "Sold out".
   */
  private async createRandomBookingsForSession(session: TrainingSession, customerIds: string[]): Promise<void> {
    const occupancyRate = Math.random();
    const spotsToBook = Math.floor(occupancyRate * (session.maxParticipants + 1));

    if (spotsToBook === 0) {
      return;
    }

    const bookedCustomerIds = [...customerIds].sort(() => Math.random() - 0.5).slice(0, spotsToBook);

    await this.prisma.booking.createMany({
      data: bookedCustomerIds.map(userId => ({
        userId,
        trainingSessionId: session.id,
        status: 'CONFIRMED' as const,
        coinsUsed: session.coinsRequired,
        bookedAt: new Date(),
      })),
    });
  }
}

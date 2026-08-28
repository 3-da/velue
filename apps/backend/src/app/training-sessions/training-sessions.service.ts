import { Injectable } from '@nestjs/common';
import { UpdateTrainingSessionStatus } from '@velocity/shared-models';
import { PrismaService } from '../prisma/prisma.service';
import { TrainingSession, TrainingTimeSlot } from '@velocity/shared-data-access';

const includeTrainer = {
  include: {
    user: {
      select: {
        firstName: true,
        lastName: true,
      },
    },
  },
} as const;

const includeBookingStatus = {
  select: {
    id: true,
    userId: true,
    status: true,
  },
} as const;

const includeTrainerAndBookings = {
  trainer: includeTrainer,
  bookings: includeBookingStatus,
} as const;

@Injectable()
export class TrainingSessionsService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(id: string): Promise<TrainingSession | null> {
    return this.prisma.trainingSession.findUnique({
      where: { id },
      include: includeTrainerAndBookings,
    });
  }

  findUpcoming(): Promise<TrainingSession[] | null> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 30);
    endDate.setHours(23, 59, 59, 999);

    return this.prisma.trainingSession.findMany({
      where: {
        date: {
          gte: today,
          lte: endDate,
        },
      },
      include: includeTrainerAndBookings,
      orderBy: [{ date: 'asc' }, { startTime: 'asc' }],
    });
  }

  updateOne(id: string, updateDto: UpdateTrainingSessionStatus): Promise<TrainingSession> {
    return this.prisma.trainingSession.update({
      where: { id },
      data: updateDto,
    });
  }

  getSessionDateTime(date: Date, timeSlot: TrainingTimeSlot): Date {
    const { hours, minutes } = this.parseSlotTime(timeSlot);
    return this.berlinWallClockToUtc(date, hours, minutes);
  }

  private parseSlotTime(timeSlot: TrainingTimeSlot): { hours: number; minutes: number } {
    const timeMatch = timeSlot.match(/SLOT_(\d{2})(\d{2})/); // SLOT_0900 -> 09:00
    if (!timeMatch) {
      throw new Error(`Invalid time slot: ${timeSlot}`);
    }
    return { hours: parseInt(timeMatch[1], 10), minutes: parseInt(timeMatch[2], 10) };
  }

  // The session date is stored as UTC midnight (@db.Date) and the slot is a
  // German wall-clock time. Anchoring the wall-clock to Europe/Berlin keeps the
  // 24h cancellation window correct across the CET/CEST switch.
  private berlinWallClockToUtc(date: Date, hours: number, minutes: number): Date {
    const utcGuess = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), hours, minutes));
    const offsetMinutes = this.berlinOffsetMinutes(utcGuess);
    return new Date(utcGuess.getTime() - offsetMinutes * 60_000);
  }

  private berlinOffsetMinutes(instant: Date): number {
    const berlin = new Date(instant.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
    const utc = new Date(instant.toLocaleString('en-US', { timeZone: 'UTC' }));
    return (berlin.getTime() - utc.getTime()) / 60_000;
  }
}
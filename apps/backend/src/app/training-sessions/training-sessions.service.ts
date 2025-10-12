import { Injectable } from '@nestjs/common';
import { UpdateTrainingSessionStatus } from '@velue/shared-models';
import { PrismaService } from '../prisma/prisma.service';
import { TrainingSession, TrainingTimeSlot } from '@velue/shared-data-access';

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
      include: {
        trainer: includeTrainer,
        bookings: {
          include: {
            customer: {
              include: {
                user: {
                  select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  findUpcoming(): Promise<TrainingSession[] | null> {
    // TODO: Mock today's date for consistent testing - Remove this line when done testing
    const today = new Date('2026-01-01');

    // const today = new Date();
    // today.setHours(0, 0, 0, 0);

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

  async canBeBooked(id: string): Promise<boolean> {
    const session = await this.prisma.trainingSession.findUnique({
      where: { id },
      include: {
        bookings: {
          where: { status: { in: ['PENDING', 'CONFIRMED'] } },
        },
      },
    });

    if (!session) return false;
    return session.status === 'SCHEDULED' && session.bookings.length < session.maxParticipants;
  }

  getSessionDateTime(date: Date, timeSlot: TrainingTimeSlot): Date {
    const sessionDate = new Date(date);

    const timeMatch = timeSlot.match(/SLOT_(\d{2})(\d{2})/); // Extract time from slot name (SLOT_0900 -> 09:00)
    if (!timeMatch) {
      throw new Error(`Invalid time slot: ${timeSlot}`);
    }

    const hours = parseInt(timeMatch[1], 10);
    const minutes = parseInt(timeMatch[2], 10);

    sessionDate.setHours(hours, minutes, 0, 0);
    return sessionDate;
  }
}
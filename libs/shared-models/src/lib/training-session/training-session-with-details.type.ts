import type { BookingStatus, TrainingSession } from '@velue/shared-data-access';

export type TrainingSessionWithDetails = TrainingSession & {
  trainer: {
    user: {
      firstName: string;
      lastName: string;
    };
  };
  bookings: {
    id: string;
    userId: string;
    status: BookingStatus;
  }[];
};
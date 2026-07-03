import { TrainingSessionWithDetails } from '@velue/shared-models';

type SessionBooking = TrainingSessionWithDetails['bookings'][number];

// A booking only occupies a seat while it is PENDING or CONFIRMED. CANCELLED
// bookings must never count toward capacity — the single source of truth for
// "does this booking still hold a seat".
export function isActiveBooking(booking: Pick<SessionBooking, 'status'>): boolean {
  return booking.status === 'PENDING' || booking.status === 'CONFIRMED';
}

export function getSessionStatusColor(session: TrainingSessionWithDetails): 'secondary' | 'success' | 'danger' {
  switch (session.status) {
    case 'SCHEDULED':
      return 'success';
    case 'COMPLETED':
      return 'secondary';
    case 'CANCELLED':
      return 'danger';
  }
}

export function getSessionAvailabilityStatus(session: TrainingSessionWithDetails): 'success' | 'warn' | 'danger' {
  const occupancyRate = countActiveBookings(session) / session.maxParticipants;

  if (occupancyRate <= 0.5) return 'success';
  if (occupancyRate <= 0.8) return 'warn';
  return 'danger';
}

export function isSessionFull(session: TrainingSessionWithDetails): boolean {
  return countActiveBookings(session) >= session.maxParticipants;
}

export function findUserBookingId(session: TrainingSessionWithDetails, userId: string): string | null {
  const booking = session.bookings?.find(candidate => candidate.userId === userId && isActiveBooking(candidate));
  return booking?.id ?? null;
}

export function hasUserBookedSession(session: TrainingSessionWithDetails, userId: string): boolean {
  return findUserBookingId(session, userId) !== null;
}

function countActiveBookings(session: TrainingSessionWithDetails): number {
  return session.bookings?.filter(isActiveBooking).length ?? 0;
}

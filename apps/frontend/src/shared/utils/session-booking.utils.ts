import { TrainingSessionWithDetails } from '@velocity/shared-models';

type SessionBooking = TrainingSessionWithDetails['bookings'][number];

const ALMOST_FULL_OCCUPANCY_PERCENT = 80;
const LAST_SPOTS_CALLOUT_THRESHOLD = 3;

export type RideDay = {
  dateKey: string;
  date: Date;
  sessions: TrainingSessionWithDetails[];
};

// A booking only occupies a seat while it is PENDING or CONFIRMED. CANCELLED
// bookings must never count toward capacity — the single source of truth for
// "does this booking still hold a seat".
export function isActiveBooking(booking: Pick<SessionBooking, 'status'>): boolean {
  return booking.status === 'PENDING' || booking.status === 'CONFIRMED';
}

export function countActiveBookingsForSession(session: TrainingSessionWithDetails): number {
  return session.bookings?.filter(isActiveBooking).length ?? 0;
}

export function getSessionOccupancyPercent(session: TrainingSessionWithDetails): number {
  if (session.maxParticipants <= 0) return 0;

  return Math.round((countActiveBookingsForSession(session) / session.maxParticipants) * 100);
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
  const occupancyRate = countActiveBookingsForSession(session) / session.maxParticipants;

  if (occupancyRate <= 0.5) return 'success';
  if (occupancyRate <= 0.8) return 'warn';
  return 'danger';
}

export function isSessionFull(session: TrainingSessionWithDetails): boolean {
  return countActiveBookingsForSession(session) >= session.maxParticipants;
}

export function findUserBookingId(session: TrainingSessionWithDetails, userId: string): string | null {
  const booking = session.bookings?.find(candidate => candidate.userId === userId && isActiveBooking(candidate));
  return booking?.id ?? null;
}

export function hasUserBookedSession(session: TrainingSessionWithDetails, userId: string): boolean {
  return findUserBookingId(session, userId) !== null;
}

export function groupSessionsByRideDay(sessions: readonly TrainingSessionWithDetails[]): RideDay[] {
  const daysByDateKey = new Map<string, RideDay>();

  for (const session of sessions) {
    if (!session.date) continue;

    const date = new Date(session.date);
    const dateKey = date.toDateString();
    const existingDay = daysByDateKey.get(dateKey);

    if (existingDay) existingDay.sessions.push(session);
    else daysByDateKey.set(dateKey, { dateKey, date, sessions: [session] });
  }

  return [...daysByDateKey.values()];
}

export function countRemainingSpotsForSession(session: TrainingSessionWithDetails): number {
  return Math.max(session.maxParticipants - countActiveBookingsForSession(session), 0);
}

export function isRideAlmostFull(session: TrainingSessionWithDetails): boolean {
  return !isSessionFull(session) && getSessionOccupancyPercent(session) >= ALMOST_FULL_OCCUPANCY_PERCENT;
}

/**
 * Short urgency note rendered under a ride's capacity meter, or null when the
 * ride is unremarkable and should stay quiet.
 *
 * Exact counts are reserved for the last few bikes so the number stays truthful
 * rather than pressuring; a ride with room to spare says nothing at all.
 */
export function getRideAvailabilityLabel(session: TrainingSessionWithDetails): string | null {
  if (session.status !== 'SCHEDULED') return null;

  if (isSessionFull(session)) return 'Sold out';

  const spotsLeft = countRemainingSpotsForSession(session);
  if (spotsLeft <= LAST_SPOTS_CALLOUT_THRESHOLD) {
    return spotsLeft === 1 ? '1 spot left' : `${spotsLeft} spots left`;
  }

  if (isRideAlmostFull(session)) return 'Almost full';

  return null;
}

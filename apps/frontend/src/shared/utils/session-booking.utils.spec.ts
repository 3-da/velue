import { describe, expect, it } from 'vitest';
import { TrainingSessionWithDetails } from '@velocity/shared-models';
import {
  countActiveBookingsForSession,
  getRideAvailabilityLabel,
  getSessionOccupancyPercent,
  groupSessionsByRideDay,
  isRideAlmostFull,
  isSessionFull,
} from './session-booking.utils';

type SessionBooking = TrainingSessionWithDetails['bookings'][number];

function buildBooking(index: number, status: SessionBooking['status']): SessionBooking {
  return { id: `booking-${index}`, userId: `user-${index}`, status } as SessionBooking;
}

function buildSession(overrides: Partial<TrainingSessionWithDetails> = {}): TrainingSessionWithDetails {
  return {
    id: 'session-1',
    trainerId: 'trainer-1',
    trainingType: 'SPINNING_BEGINNER',
    date: new Date('2026-09-01'),
    startTime: 'SLOT_0900',
    durationMinutes: 45,
    maxParticipants: 20,
    coinsRequired: 1,
    status: 'SCHEDULED',
    qrCode: 'qr-1',
    createdAt: new Date(),
    updatedAt: new Date(),
    trainer: { user: { firstName: 'Lena', lastName: 'Fischer' } },
    bookings: [],
    ...overrides,
  } as TrainingSessionWithDetails;
}

function buildSessionWithBookings(activeCount: number, maxParticipants = 20): TrainingSessionWithDetails {
  const bookings = Array.from({ length: activeCount }, (_, index) => buildBooking(index, 'CONFIRMED'));
  return buildSession({ maxParticipants, bookings });
}

describe('countActiveBookingsForSession', () => {
  it('ignores cancelled bookings so they do not occupy a bike', () => {
    const session = buildSession({
      bookings: [buildBooking(1, 'CONFIRMED'), buildBooking(2, 'PENDING'), buildBooking(3, 'CANCELLED')],
    });

    expect(countActiveBookingsForSession(session)).toBe(2);
  });
});

describe('getSessionOccupancyPercent', () => {
  it('reports occupancy from active bookings only', () => {
    expect(getSessionOccupancyPercent(buildSessionWithBookings(5, 20))).toBe(25);
  });

  it('returns zero rather than dividing by zero when capacity is missing', () => {
    expect(getSessionOccupancyPercent(buildSessionWithBookings(0, 0))).toBe(0);
  });
});

describe('isRideAlmostFull', () => {
  it('is false below the threshold', () => {
    expect(isRideAlmostFull(buildSessionWithBookings(15, 20))).toBe(false);
  });

  it('is true at the threshold', () => {
    expect(isRideAlmostFull(buildSessionWithBookings(16, 20))).toBe(true);
  });

  it('is false once the ride is full, because "sold out" supersedes it', () => {
    expect(isRideAlmostFull(buildSessionWithBookings(20, 20))).toBe(false);
  });
});

describe('getRideAvailabilityLabel', () => {
  it('stays quiet for a ride with room to spare', () => {
    expect(getRideAvailabilityLabel(buildSessionWithBookings(5, 20))).toBeNull();
  });

  it('warns once the ride is almost full', () => {
    expect(getRideAvailabilityLabel(buildSessionWithBookings(16, 20))).toBe('Almost full');
  });

  it('switches to an exact count for the last few bikes', () => {
    expect(getRideAvailabilityLabel(buildSessionWithBookings(17, 20))).toBe('3 spots left');
  });

  it('uses the singular for a single remaining bike', () => {
    expect(getRideAvailabilityLabel(buildSessionWithBookings(19, 20))).toBe('1 spot left');
  });

  it('reports a full ride as sold out', () => {
    expect(getRideAvailabilityLabel(buildSessionWithBookings(20, 20))).toBe('Sold out');
  });

  it('stays quiet for sessions that are not scheduled, since the status pill says it', () => {
    const cancelled = buildSession({ status: 'CANCELLED', maxParticipants: 20, bookings: [] });

    expect(getRideAvailabilityLabel(cancelled)).toBeNull();
  });
});

describe('groupSessionsByRideDay', () => {
  it('groups sessions by calendar day and preserves order', () => {
    const first = buildSession({ id: 'a', date: new Date('2026-09-01T09:00:00Z') });
    const second = buildSession({ id: 'b', date: new Date('2026-09-01T18:00:00Z') });
    const other = buildSession({ id: 'c', date: new Date('2026-09-02T09:00:00Z') });

    const days = groupSessionsByRideDay([first, second, other]);

    expect(days.length).toBe(2);
    expect(days[0].sessions.map(session => session.id)).toEqual(['a', 'b']);
    expect(days[1].sessions.map(session => session.id)).toEqual(['c']);
  });

  it('skips sessions without a date rather than crashing', () => {
    const undated = buildSession({ id: 'no-date', date: null as unknown as Date });

    expect(groupSessionsByRideDay([undated])).toEqual([]);
  });
});

describe('isSessionFull', () => {
  it('treats a ride as full only when active bookings reach capacity', () => {
    expect(isSessionFull(buildSessionWithBookings(19, 20))).toBe(false);
    expect(isSessionFull(buildSessionWithBookings(20, 20))).toBe(true);
  });
});

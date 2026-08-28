import { TrainingTimeSlot, TrainingType } from '@velocity/shared-data-access';

export const TRAINING_SESSION = {
  durationMinutes: 45,
  maxParticipants: 30,
  coinsRequired: 10,
  cancellationHoursAdvance: 24,
} as const;

/**
 * The studio's recurring daily timetable: which class type runs in which slot.
 * Shared by the destructive seed script and the non-destructive schedule-extension
 * job so both generate the same demo week from one source of truth.
 */
export const DEMO_DAILY_SCHEDULE: { time: TrainingTimeSlot; type: TrainingType }[] = [
  { time: TrainingTimeSlot.SLOT_0900, type: TrainingType.SPINNING_BEGINNER },
  { time: TrainingTimeSlot.SLOT_1030, type: TrainingType.SPINNING_INTERMEDIATE },
  { time: TrainingTimeSlot.SLOT_1200, type: TrainingType.SPINNING_ADVANCED },
  { time: TrainingTimeSlot.SLOT_1600, type: TrainingType.SPINNING_HIIT },
  { time: TrainingTimeSlot.SLOT_1730, type: TrainingType.SPINNING_ENDURANCE },
  { time: TrainingTimeSlot.SLOT_1900, type: TrainingType.SPINNING_BEGINNER },
  { time: TrainingTimeSlot.SLOT_2030, type: TrainingType.SPINNING_INTERMEDIATE },
];

/** How many days of demo schedule to keep upcoming at all times. */
export const DEMO_SESSION_WINDOW_DAYS = 45;

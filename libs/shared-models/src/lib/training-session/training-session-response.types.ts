export type TrainingSessionResponse = {
  id: string;
  title: string;
  description: string;
  date: Date;
  startTime: string;
  endTime: string;
  maxParticipants: number;
  currentParticipants: number;
  trainerId: string;
  status: string;
  coinsRequired: number;
  durationMinutes: number;
  createdAt: Date;
  updatedAt: Date;
};
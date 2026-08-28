import type { TrainingStatus } from '@velocity/shared-data-access';

export type UpdateTrainingSessionStatus = {
  status: TrainingStatus;
  maxParticipants?: number;
};
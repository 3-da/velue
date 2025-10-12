import type { TrainingStatus } from '@velue/shared-data-access';

export type UpdateTrainingSessionStatus = {
  status: TrainingStatus;
  maxParticipants?: number;
};
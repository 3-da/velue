import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { TrainingStatus } from '@velue/shared-data-access';
import { UpdateTrainingSessionStatus } from '@velue/shared-models';
import { TRAINING_SESSION } from '@velue/shared-constants';

export class UpdateTrainingSessionStatusDto implements UpdateTrainingSessionStatus {
  @IsEnum(TrainingStatus)
  status: TrainingStatus;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(TRAINING_SESSION.maxParticipants)
  maxParticipants?: number;
}

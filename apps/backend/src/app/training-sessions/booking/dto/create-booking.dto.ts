import { IsUUID } from 'class-validator';
import { CreateBookingRequest } from '@velue/shared-models';

export class CreateBookingDto implements CreateBookingRequest {
  @IsUUID()
  trainingSessionId: string;

  @IsUUID()
  userId: string;
}

import { IsUUID } from 'class-validator';
import { CreateBookingRequest } from '@velocity/shared-models';

export class CreateBookingDto implements CreateBookingRequest {
  @IsUUID()
  trainingSessionId: string;
}

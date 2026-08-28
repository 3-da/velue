import { IsString } from 'class-validator';
import { CreateCheckoutSessionRequest } from '@velocity/shared-models';

export class CreateCheckoutSessionDto implements CreateCheckoutSessionRequest {
  @IsString()
  priceId: string;
}

import { IsString } from 'class-validator';
import { CreateCheckoutSessionRequest } from '@velue/shared-models';

export class CreateCheckoutSessionDto implements CreateCheckoutSessionRequest {
  @IsString()
  priceId: string;
}

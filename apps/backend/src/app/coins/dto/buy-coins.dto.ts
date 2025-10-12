import { IsNotEmpty, IsString } from 'class-validator';

export class BuyCoinsDto {
  @IsString()
  @IsNotEmpty()
  coinsPackageId: string;

  @IsString()
  @IsNotEmpty()
  paymentIntentId: string;
}

import { IsDate, IsIn, IsNumber, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { BookingResponse } from '@velue/shared-models';

export class BookingDto implements BookingResponse {
  @IsUUID()
  id: string;

  @IsUUID()
  userId: string;

  @IsUUID()
  trainingSessionId: string;

  @IsString()
  @IsIn(['PENDING', 'CONFIRMED', 'CANCELLED', 'NO_SHOW', 'ATTENDED'])
  status: string;

  @IsNumber()
  coinsUsed: number;

  @IsDate()
  @Type(() => Date)
  bookedAt: Date;

  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @Type(() => Date)
  updatedAt: Date;
}

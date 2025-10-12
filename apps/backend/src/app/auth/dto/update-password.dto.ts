import { IsString, MinLength } from 'class-validator';
import { UpdatePasswordRequest } from '@velue/shared-models';

export class UpdatePasswordDto implements UpdatePasswordRequest {
  @IsString()
  currentPassword: string;

  @IsString()
  @MinLength(12)
  newPassword: string;
}

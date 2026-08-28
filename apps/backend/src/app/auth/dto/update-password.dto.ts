import { IsString, MinLength } from 'class-validator';
import { UpdatePasswordRequest } from '@velocity/shared-models';
import { PASSWORD_VALIDATION } from '@velocity/shared-constants';

export class UpdatePasswordDto implements UpdatePasswordRequest {
  @IsString()
  currentPassword: string;

  @IsString()
  @MinLength(PASSWORD_VALIDATION.MIN_LENGTH, { message: PASSWORD_VALIDATION.VALIDATION_MESSAGES.MIN_LENGTH })
  newPassword: string;
}

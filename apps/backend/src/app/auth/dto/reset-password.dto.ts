import { IsString, MinLength } from 'class-validator';
import { PASSWORD_VALIDATION } from '@velue/shared-constants';

export class ResetPasswordDto {
  @IsString()
  token: string;

  @IsString()
  @MinLength(PASSWORD_VALIDATION.MIN_LENGTH, { message: PASSWORD_VALIDATION.VALIDATION_MESSAGES.MIN_LENGTH })
  newPassword: string;
}

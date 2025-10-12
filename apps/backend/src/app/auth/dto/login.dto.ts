import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { PASSWORD_VALIDATION } from '@velue/shared-constants';
import { LoginRequest } from '@velue/shared-models';

export class LoginDto implements LoginRequest {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(PASSWORD_VALIDATION.MIN_LENGTH, { message: PASSWORD_VALIDATION.VALIDATION_MESSAGES.MIN_LENGTH })
  @MaxLength(PASSWORD_VALIDATION.MAX_LENGTH, { message: PASSWORD_VALIDATION.VALIDATION_MESSAGES.MAX_LENGTH })
  password: string;
}

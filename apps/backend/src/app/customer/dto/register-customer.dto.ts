import { Equals, IsBoolean, IsDateString, IsEmail, IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { PASSWORD_VALIDATION } from '@velocity/shared-constants';
import { RegisterCustomerRequest } from '@velocity/shared-models';

export class RegisterCustomerDto implements RegisterCustomerRequest {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(PASSWORD_VALIDATION.MIN_LENGTH, { message: PASSWORD_VALIDATION.VALIDATION_MESSAGES.MIN_LENGTH })
  @MaxLength(PASSWORD_VALIDATION.MAX_LENGTH, { message: PASSWORD_VALIDATION.VALIDATION_MESSAGES.MAX_LENGTH })
  password: string;

  @IsDateString()
  birthDate: string;

  @IsOptional()
  @IsPhoneNumber('DE')
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  emergencyContact?: string;

  @Equals(true, { message: 'You must accept the Terms of Service' })
  acceptsTerms: boolean;

  @Equals(true, { message: 'You must accept the Privacy Policy' })
  acceptsPrivacy: boolean;

  @IsBoolean()
  acceptsMarketing: boolean;
}
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';
import zxcvbn from 'zxcvbn';
import { PasswordStrengthResult, PasswordValidationUserData, PasswordValidator } from '@velue/shared-models';
import { PASSWORD_VALIDATION } from '@velue/shared-constants';

@Injectable()
export class PasswordService {
  constructor(private configService: ConfigService) {}

  async hashPassword(plainPassword: string): Promise<string> {
    return argon2.hash(plainPassword, {
      type: argon2.argon2id,
      memoryCost: this.configService.get<number>('ARGON2_MEMORY_COST', 32768),
      timeCost: this.configService.get<number>('ARGON2_TIME_COST', 2),
      parallelism: this.configService.get<number>('ARGON2_PARALLELISM', 2),
    });
  }

  async verifyPassword(hashedPassword: string, plainPassword: string): Promise<boolean> {
    try {
      return await argon2.verify(hashedPassword, plainPassword);
    } catch {
      return false;
    }
  }

  validatePasswordStrength(password: string, userData: PasswordValidationUserData): PasswordStrengthResult {
    // Step 1: Use shared validator for consistent basic validation (same as frontend)
    const basicValidation = PasswordValidator.validateBasicStrength(password, userData);

    // Step 2: Enhanced backend validation with zxcvbn for security
    const errors: string[] = [...basicValidation.errors];

    // Length validation using shared constants
    if (password.length < PASSWORD_VALIDATION.MIN_LENGTH) {
      errors.push(PASSWORD_VALIDATION.VALIDATION_MESSAGES.MIN_LENGTH);
    }

    if (password.length > PASSWORD_VALIDATION.MAX_LENGTH) {
      errors.push(PASSWORD_VALIDATION.VALIDATION_MESSAGES.MAX_LENGTH);
    }

    // Advanced security analysis with zxcvbn
    const userInputs = [userData.firstName, userData.lastName, userData.email.split('@')[0], userData.email];
    const zxcvbnResult = zxcvbn(password, userInputs);

    // Require zxcvbn score of 3 or higher for backend security
    if (zxcvbnResult.score < 3) {
      errors.push(`Password is too weak: ${zxcvbnResult.feedback.warning || 'Try a longer, more complex password'}`);

      if (zxcvbnResult.feedback.suggestions.length > 0) {
        zxcvbnResult.feedback.suggestions.forEach(suggestion => {
          errors.push(suggestion);
        });
      }
    }

    // Remove duplicates from combined validation
    const uniqueErrors = [...new Set(errors)];

    return {
      isValid: uniqueErrors.length === 0,
      errors: uniqueErrors,
      score: Math.min(basicValidation.score || 0, zxcvbnResult.score), // Use the lower score for security
    };
  }
}

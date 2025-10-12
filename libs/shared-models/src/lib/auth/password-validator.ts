import { PasswordStrengthResult, PasswordValidationUserData } from './password-validation.types';

export class PasswordValidator {
  /**
   * Basic password validation that works on both frontend and backend
   * Frontend uses this for immediate feedback
   * Backend enhances this with zxcvbn for security
   */
  static validateBasicStrength(password: string, userData: PasswordValidationUserData): PasswordStrengthResult {
    const errors: string[] = [];

    // Check if password contains user information
    const userInputs = [
      userData.firstName.toLowerCase(),
      userData.lastName.toLowerCase(),
      userData.email.split('@')[0].toLowerCase(),
    ].filter(Boolean);

    const lowerPassword = password.toLowerCase();
    const hasUserInfo = userInputs.some(input => input.length >= 3 && lowerPassword.includes(input));

    if (hasUserInfo) {
      errors.push('Password should not contain your personal information');
    }

    // Check for simple repeated characters
    if (/^(.)\1{4,}$/.test(password)) {
      errors.push('Password cannot be mostly repeated characters');
    }

    // Check for common weak passwords
    const commonPatterns = [
      'password',
      '123456',
      'qwerty',
      '111111',
      '000000',
      'abc123',
      'password123',
      '123456789',
      'welcome',
    ];

    const hasCommonPattern = commonPatterns.some(pattern => lowerPassword.includes(pattern));

    if (hasCommonPattern) {
      errors.push('Password contains common weak patterns');
    }

    // Check for basic complexity
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);

    const complexity = [hasLower, hasUpper, hasDigit, hasSpecial].filter(Boolean).length;

    if (password.length >= 12 && complexity < 2) {
      errors.push('Password needs more variety (mix of letters, numbers, symbols)');
    }

    return {
      isValid: errors.length === 0,
      errors,
      score: this.calculateBasicScore(password, complexity, hasUserInfo),
    };
  }

  private static calculateBasicScore(password: string, complexity: number, hasUserInfo: boolean): number {
    let score = 0;

    // Length score
    if (password.length >= 12) score += 2;
    else if (password.length >= 8) score += 1;

    // Complexity score
    score += complexity;

    // Penalty for user info
    if (hasUserInfo) score -= 2;

    // Cap at 4 for basic validation
    return Math.max(0, Math.min(4, score));
  }
}

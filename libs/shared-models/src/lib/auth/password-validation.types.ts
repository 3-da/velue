export type PasswordStrengthResult = {
  isValid: boolean;
  errors: string[];
  score?: number; // Optional: 0-4 strength score
};

export type PasswordValidationUserData = {
  firstName: string;
  lastName: string;
  email: string;
};
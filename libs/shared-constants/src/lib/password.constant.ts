export type PasswordValidation = {
  MIN_LENGTH: number;
  MAX_LENGTH: number;
  VALIDATION_MESSAGES: {
    MIN_LENGTH: string;
    MAX_LENGTH: string;
    REQUIRED: string;
    STRENGTH: string;
  };
};

export const PASSWORD_MIN_LENGTH = 12;
export const PASSWORD_MAX_LENGTH = 64;

export const PASSWORD_VALIDATION: PasswordValidation = {
  MIN_LENGTH: PASSWORD_MIN_LENGTH,
  MAX_LENGTH: PASSWORD_MAX_LENGTH,
  VALIDATION_MESSAGES: {
    MIN_LENGTH: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
    MAX_LENGTH: `Password cannot exceed ${PASSWORD_MAX_LENGTH} characters`,
    REQUIRED: 'Password is required',
    STRENGTH: 'Password does not meet security requirements',
  },
} as const;

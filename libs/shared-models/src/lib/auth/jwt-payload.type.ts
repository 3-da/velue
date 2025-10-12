import type { UserRole } from '@velue/shared-data-access';

export type JwtPayload = {
  sub: string; // User ID
  email: string; // For identification
  role: UserRole; // For authorization
  iat?: number; // Issued at
  exp?: number; // Expires at
  type?: 'refresh'; // Only for refresh tokens
};
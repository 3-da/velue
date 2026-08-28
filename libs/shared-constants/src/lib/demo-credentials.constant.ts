/**
 * The seeded demo customer account, used by `prisma/seed.ts` to create the
 * account and by the frontend's "Continue as demo customer" login shortcut
 * to authenticate as it - one source of truth so the two can't drift apart.
 */
export const DEMO_CUSTOMER_CREDENTIALS = {
  email: 'test-customer@velocity.de',
  password: 'Customer2024!',
} as const;

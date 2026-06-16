import { HttpErrorResponse } from '@angular/common/http';

/**
 * Pulls a human-readable string out of an HTTP error so it never lands in a
 * toast as "[object Object]". Handles plain-string bodies, NestJS objects with a
 * string `message`, and class-validator's array of messages.
 */
export function extractHttpErrorMessage(error: unknown, fallback: string): string {
  if (!(error instanceof HttpErrorResponse)) {
    return fallback;
  }

  const body = error.error;
  if (typeof body === 'string') return body;
  if (Array.isArray(body?.message)) return body.message.join(', ');
  if (typeof body?.message === 'string') return body.message;

  return error.message || fallback;
}

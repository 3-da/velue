import { Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { EmailService } from '../email/email.service';

@Controller('dev')
export class DevController {
  constructor(private readonly emailService: EmailService) {}

  // These routes expose stored emails for local testing only. In production
  // they must look like they were never registered, so we return 404.
  private assertNotProduction(): void {
    if (process.env.NODE_ENV === 'production') {
      throw new NotFoundException();
    }
  }

  /**
   * GET /api/dev/emails
   * Returns all stored emails in development mode
   * Used for testing email functionality without actual email delivery
   */
  @Get('emails')
  getEmails(): { count: number; emails: unknown[]; message: string } {
    this.assertNotProduction();
    const emails = this.emailService.getStoredEmails();
    return {
      count: emails.length,
      emails: emails,
      message: emails.length > 0
        ? `${emails.length} email(s) found`
        : 'No emails sent yet. Try changing your password to generate an email.',
    };
  }

  /**
   * DELETE /api/dev/emails
   * Clears all stored emails (development mode only)
   */
  @Delete('emails')
  @HttpCode(HttpStatus.NO_CONTENT)
  clearEmails(): void {
    this.assertNotProduction();
    this.emailService.clearStoredEmails();
  }
}

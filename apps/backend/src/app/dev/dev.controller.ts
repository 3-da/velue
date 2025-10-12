import { Controller, Delete, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { EmailService } from '../email/email.service';

@Controller('dev')
export class DevController {
  constructor(private readonly emailService: EmailService) {}

  /**
   * GET /api/dev/emails
   * Returns all stored emails in development mode
   * Used for testing email functionality without actual email delivery
   */
  @Get('emails')
  getEmails(): { count: number; emails: unknown[]; message: string } {
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
    this.emailService.clearStoredEmails();
  }
}

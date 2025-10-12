import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

export type EmailData = {
  to: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  sentAt: string;
};

@Injectable()
export class EmailService {
  private readonly emailStore: EmailData[] = [];
  private readonly isProduction: boolean;
  private readonly transporter: Transporter | null = null;
  private readonly smtpFrom: string;
  private readonly demoAccounts = ['test-customer@velue.de', 'test-trainer@velue.de', 'test-admin@velue.de'];

  constructor(private readonly configService: ConfigService) {
    this.isProduction = this.configService.get('NODE_ENV') === 'production';
    this.smtpFrom = this.configService.get('SMTP_FROM') || 'noreply@velue.de';

    // Initialize nodemailer transporter
    const smtpHost = this.configService.get('SMTP_HOST');
    const smtpPort = this.configService.get('SMTP_PORT');
    const smtpUser = this.configService.get('SMTP_USER');
    const smtpPass = this.configService.get('SMTP_PASS');

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      this.transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: false, // Use TLS
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
      console.log('[EmailService] Nodemailer configured successfully');
    } else {
      console.log('[EmailService] Nodemailer not configured - emails will be stored in memory');
    }
  }

  /**
   * Send email via nodemailer or store in preview mode for demo accounts
   */
  async sendEmail(to: string, subject: string, htmlContent: string, textContent: string): Promise<void> {
    const emailData: EmailData = {
      to,
      subject,
      htmlContent,
      textContent,
      sentAt: new Date().toISOString(),
    };

    // Check if demo account - store in memory instead of sending
    if (this.demoAccounts.includes(to)) {
      this.emailStore.push(emailData);
      console.log(`[EmailService] Demo account detected: Email stored. View at /api/dev/emails`);
      console.log(`[EmailService] To: ${to} | Subject: ${subject}`);
      return;
    }

    // Real accounts MUST have SMTP configured
    if (!this.transporter) {
      const errorMsg = `[EmailService] CRITICAL: Cannot send email to real account without SMTP configuration. Please configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env file.`;
      console.error(errorMsg);
      throw new Error('Email service not configured. Please contact administrator.');
    }

    // Send real email via SMTP
    try {
      await this.transporter.sendMail({
        from: this.smtpFrom,
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.htmlContent,
        text: emailData.textContent,
      });
      console.log(`[EmailService] ✅ Real email sent successfully to ${to}`);
    } catch (error) {
      console.error('[EmailService] ❌ Failed to send email:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }

  /**
   * Send password changed confirmation email
   */
  async sendPasswordChangedEmail(userEmail: string, userName: string): Promise<void> {
    const subject = 'Password Changed - Velué Fitness';
    const timestamp = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.8; color: #000000; background-color: #ffffff; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 0; }
          .header { background-color: #f8b500; color: #000000; padding: 30px; text-align: center; }
          .header h1 { margin: 0; color: #000000; font-size: 28px; }
          .content { padding: 30px; background-color: #ffffff; }
          .content p { margin-bottom: 15px; color: #000000; }
          .content h2 { margin-bottom: 20px; color: #000000; font-size: 24px; }
          .content ul { margin: 15px 0 20px 20px; }
          .content li { margin-bottom: 8px; color: #000000; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #000000; background-color: #f4f4f4; }
          .warning {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 20px;
            margin: 25px 0;
            color: #000000;
          }
          .warning strong { color: #000000; }
          .warning p { margin-top: 10px; margin-bottom: 0; color: #000000; }
          .section-title { font-weight: bold; margin-top: 25px; margin-bottom: 10px; color: #000000; }
          a { color: #f8b500; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Velué Fitness</h1>
          </div>
          <div class="content">
            <h2>Password Changed</h2>

            <p>Hallo ${userName},</p>

            <p>Your password was successfully changed on <strong>${timestamp}</strong>.</p>

            <div class="warning">
              <strong>⚠️ Security Notice</strong>
              <p>If you did not make this change, please contact our support team immediately at <a href="mailto:support@velue.de">support@velue.de</a>.</p>
            </div>

            <p class="section-title">For your security, we recommend:</p>
            <ul>
              <li>Never share your password with anyone</li>
              <li>Use a unique password for Velué Fitness</li>
              <li>Change your password regularly</li>
            </ul>

            <p style="margin-top: 30px;">Best regards,<br>Your Velué Fitness Team</p>
          </div>
          <div class="footer">
            <p>© 2024 Velué Fitness GmbH | Berlin, Germany</p>
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
Velué Fitness - Password Changed

Hallo ${userName},

Your password was successfully changed on ${timestamp}.

⚠️ SECURITY NOTICE
If you did not make this change, please contact our support team immediately at support@velue.de.

For your security, we recommend:
- Never share your password with anyone
- Use a unique password for Velué Fitness
- Change your password regularly

Best regards,
Your Velué Fitness Team

---
© 2024 Velué Fitness GmbH | Berlin, Germany
This is an automated message. Please do not reply to this email.
    `;

    await this.sendEmail(userEmail, subject, htmlContent, textContent);
  }

  /**
   * Send password reset email with token
   */
  async sendPasswordResetEmail(userEmail: string, userName: string, resetToken: string): Promise<void> {
    const subject = 'Password Reset - Velué Fitness';
    const resetUrl = `${this.configService.get('FRONTEND_URL')}/reset-password?token=${resetToken}`;
    const timestamp = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.8; color: #000000; background-color: #ffffff; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 0; }
          .header { background-color: #f8b500; color: #000000; padding: 30px; text-align: center; }
          .header h1 { margin: 0; color: #000000; font-size: 28px; }
          .content { padding: 30px; background-color: #ffffff; }
          .content p { margin-bottom: 15px; color: #000000; }
          .content h2 { margin-bottom: 20px; color: #000000; font-size: 24px; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #000000; background-color: #f4f4f4; }
          .button {
            display: inline-block;
            padding: 15px 30px;
            background-color: #f8b500;
            color: #000000;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin: 20px 0;
          }
          .warning {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 20px;
            margin: 25px 0;
            color: #000000;
          }
          .warning strong { color: #000000; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Velué Fitness</h1>
          </div>
          <div class="content">
            <h2>Password Reset Request</h2>

            <p>Hallo ${userName},</p>

            <p>We received a request to reset your password on <strong>${timestamp}</strong>.</p>

            <p>Click the button below to reset your password. This link is valid for 1 hour.</p>

            <a href="${resetUrl}" class="button">Reset Password</a>

            <div class="warning">
              <strong>⚠️ Security Notice</strong>
              <p>If you did not request this password reset, please ignore this email. Your password will remain unchanged.</p>
            </div>

            <p>Best regards,<br>Your Velué Fitness Team</p>
          </div>
          <div class="footer">
            <p>© 2024 Velué Fitness GmbH | Berlin, Germany</p>
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
Velué Fitness - Password Reset Request

Hallo ${userName},

We received a request to reset your password on ${timestamp}.

Click the link below to reset your password. This link is valid for 1 hour.

${resetUrl}

⚠️ SECURITY NOTICE
If you did not request this password reset, please ignore this email. Your password will remain unchanged.

Best regards,
Your Velué Fitness Team

---
© 2024 Velué Fitness GmbH | Berlin, Germany
This is an automated message. Please do not reply to this email.
    `;

    await this.sendEmail(userEmail, subject, htmlContent, textContent);
  }

  /**
   * Get all stored emails (development mode only)
   */
  getStoredEmails(): EmailData[] {
    if (this.isProduction) {
      return [];
    }
    return this.emailStore;
  }

  /**
   * Clear all stored emails (development mode only)
   */
  clearStoredEmails(): void {
    if (!this.isProduction) {
      this.emailStore.length = 0;
    }
  }
}
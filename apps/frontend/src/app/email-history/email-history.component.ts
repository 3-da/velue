import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EmailData, EmailHistoryService } from '../../shared/services/email-history.service';
import { CardModule } from 'primeng/card';
import { DatePipe } from '@angular/common';
import { Tag } from 'primeng/tag';
import { Dialog } from 'primeng/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Button } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-email-history',
  imports: [CardModule, DatePipe, Tag, Dialog, Button],
  templateUrl: './email-history.component.html',
  styleUrl: './email-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailHistoryComponent {
  private readonly emailHistoryService = inject(EmailHistoryService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly messageService = inject(MessageService);

  protected readonly emails: Signal<EmailData[] | undefined> = toSignal(this.emailHistoryService.getEmails(), {
    initialValue: [],
  });

  protected readonly showEmailDialog: WritableSignal<boolean> = signal(false);
  protected readonly selectedEmail = signal<EmailData | null>(null);
  protected readonly deleting = signal(false);

  protected readonly sanitizedEmailContent = computed<SafeHtml | null>(() => {
    const email = this.selectedEmail();
    if (!email) return null;
    return this.sanitizer.bypassSecurityTrustHtml(email.htmlContent);
  });

  protected viewEmailContent(email: EmailData): void {
    this.selectedEmail.set(email);
    this.showEmailDialog.set(true);
  }

  protected deleteAllEmails(): void {
    this.deleting.set(true);
    this.emailHistoryService.deleteAllEmails().subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Emails Deleted',
          detail: 'All emails have been cleared successfully.',
        });
        this.deleting.set(false);
        window.location.reload();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Delete Failed',
          detail: 'Failed to delete emails. Please try again.',
        });
        this.deleting.set(false);
      },
    });
  }
}

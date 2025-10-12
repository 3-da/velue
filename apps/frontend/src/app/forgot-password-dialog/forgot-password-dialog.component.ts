import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password-dialog',
  imports: [Dialog, ButtonModule, FloatLabelModule, InputTextModule, ReactiveFormsModule],
  template: `
    <p-dialog
      header="Forgot Password"
      [modal]="true"
      [style]="{ width: '90vw', maxWidth: '450px' }"
      [visible]="visible()"
      (onHide)="closeDialog()"
    >
      <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">
        <p class="mb-4">Enter your email address and we'll send you a link to reset your password.</p>

        <p-floatlabel class="mb-4 w-full" variant="on">
          <input
            autocomplete="email"
            class="w-full"
            formControlName="email"
            id="email"
            pInputText
            type="email"
          />
          <label for="email">Email Address</label>
        </p-floatlabel>

        <div class="flex justify-end gap-2">
          <p-button label="Cancel" severity="secondary" type="button" [outlined]="true" (onClick)="closeDialog()" />
          <p-button
            label="Send Reset Link"
            type="submit"
            [disabled]="!forgotPasswordForm.valid || loading()"
            [loading]="loading()"
          />
        </div>
      </form>
    </p-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordDialogComponent {
  readonly visible = input<boolean>(false);
  readonly dialogClose = output<void>();

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly messageService = inject(MessageService);

  protected readonly loading = signal(false);
  protected readonly forgotPasswordForm: FormGroup;

  constructor() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  protected closeDialog(): void {
    this.forgotPasswordForm.reset();
    this.dialogClose.emit();
  }

  protected async onSubmit(): Promise<void> {
    if (!this.forgotPasswordForm.valid) {
      return;
    }

    this.loading.set(true);

    try {
      const { email } = this.forgotPasswordForm.value as { email: string };
      await this.authService.forgotPassword(email);

      this.messageService.add({
        severity: 'success',
        summary: 'Email Sent',
        detail: 'If an account with that email exists, a password reset link has been sent.',
        life: 6000,
      });

      this.closeDialog();
    } catch (error) {
      console.error('Forgot password failed:', error);

      let errorMessage = 'Failed to send reset email. Please try again.';
      if (error instanceof HttpErrorResponse) {
        errorMessage = error.error?.message || error.message || errorMessage;
      }

      this.messageService.add({
        severity: 'error',
        summary: 'Request Failed',
        detail: errorMessage,
      });
    } finally {
      this.loading.set(false);
    }
  }
}

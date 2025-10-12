import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../shared/services/auth.service';
import { PASSWORD_VALIDATION } from '@velue/shared-constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-change-password-dialog',
  imports: [Dialog, ButtonModule, FloatLabelModule, PasswordModule, ReactiveFormsModule],
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordDialogComponent {
  readonly visible = input<boolean>(false);
  readonly dialogClose = output<void>();

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly messageService = inject(MessageService);

  protected readonly loading = signal(false);
  protected readonly changePasswordForm: FormGroup;

  constructor() {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(PASSWORD_VALIDATION.MIN_LENGTH)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  protected closeDialog(): void {
    this.changePasswordForm.reset();
    this.dialogClose.emit();
  }

  protected async onSubmit(): Promise<void> {
    if (!this.changePasswordForm.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Invalid Form',
        detail: 'Please fill in all required fields correctly.',
      });
      return;
    }

    const { currentPassword, newPassword, confirmPassword } = this.changePasswordForm.value as {
      currentPassword: string;
      newPassword: string;
      confirmPassword: string;
    };

    if (newPassword !== confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Password Mismatch',
        detail: 'New passwords do not match.',
      });
      return;
    }

    this.loading.set(true);

    try {
      await this.authService.updatePassword({ currentPassword, newPassword });

      this.messageService.add({
        severity: 'success',
        summary: 'Password Updated',
        detail: 'Your password has been updated successfully. A confirmation email has been sent.',
        life: 5000,
      });

      this.closeDialog();
    } catch (error) {
      console.error('Password update failed:', error);

      let errorMessage = 'Failed to update password. Please try again.';
      if (error instanceof HttpErrorResponse) {
        errorMessage = error.error?.message || error.message || errorMessage;
      }

      this.messageService.add({
        severity: 'error',
        summary: 'Update Failed',
        detail: errorMessage,
      });
    } finally {
      this.loading.set(false);
    }
  }

  protected isFieldInvalid(fieldName: string): boolean {
    const field = this.changePasswordForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}

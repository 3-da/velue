import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../shared/services/auth.service';
import { PASSWORD_VALIDATION } from '@velue/shared-constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  imports: [ButtonModule, FloatLabelModule, PasswordModule, ReactiveFormsModule],
  template: `
    <div class="flex w-full h-full justify-center items-center">
      <div class="w-[90vw] sm:w-full sm:max-w-md rounded-lg shadow-lg p-8 bg-surface-900">
        <h2 class="text-center text-2xl font-bold mb-8">Reset Password</h2>

        @if (invalidToken()) {
          <div class="text-center">
            <i class="pi pi-exclamation-triangle text-6xl text-yellow-500 mb-4"></i>
            <p class="mb-4">This password reset link is invalid or has expired.</p>
            <p-button label="Back to Login" (onClick)="navigateToAuth()" />
          </div>
        } @else {
          <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()">
            <p class="mb-6 text-center">Enter your new password below.</p>

            <p-floatlabel class="mb-1" variant="on">
              <p-password
                class="w-full"
                formControlName="newPassword"
                inputId="newPassword"
                [feedback]="false"
                [inputStyle]="{ width: '100%' }"
                [toggleMask]="true"
              />
              <label for="newPassword">New Password</label>
            </p-floatlabel>
            <small class="text-gray-400 block mb-4">Minimum {{minPasswordLength}} characters</small>

            <p-floatlabel class="mb-4" variant="on">
              <p-password
                class="w-full"
                formControlName="confirmPassword"
                inputId="confirmPassword"
                [feedback]="false"
                [inputStyle]="{ width: '100%' }"
                [toggleMask]="true"
              />
              <label for="confirmPassword">Confirm Password</label>
            </p-floatlabel>

            <div class="w-full mt-6">
              <p-button
                label="Reset Password"
                type="submit"
                [disabled]="!resetPasswordForm.valid || loading()"
                [loading]="loading()"
                [style]="{ width: '100%' }"
              />
            </div>

            <div class="text-center mt-4">
              <p-button label="Back to Login" link (onClick)="navigateToAuth()" />
            </div>
          </form>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly messageService = inject(MessageService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly loading = signal(false);
  protected readonly invalidToken = signal(false);
  protected readonly minPasswordLength = PASSWORD_VALIDATION.MIN_LENGTH;
  protected readonly resetPasswordForm: FormGroup;
  private resetToken = '';

  constructor() {
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(PASSWORD_VALIDATION.MIN_LENGTH)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.resetToken = params['token'];
      if (!this.resetToken) {
        this.invalidToken.set(true);
      }
    });
  }

  protected navigateToAuth(): void {
    void this.router.navigate(['/auth']);
  }

  protected async onSubmit(): Promise<void> {
    if (!this.resetPasswordForm.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Invalid Form',
        detail: 'Please fill in all required fields correctly.',
      });
      return;
    }

    const { newPassword, confirmPassword } = this.resetPasswordForm.value as {
      newPassword: string;
      confirmPassword: string;
    };

    if (newPassword !== confirmPassword) {
      this.messageService.add({
        severity: 'error',
        summary: 'Password Mismatch',
        detail: 'Passwords do not match.',
      });
      return;
    }

    this.loading.set(true);

    try {
      await this.authService.resetPassword(this.resetToken, newPassword);

      this.messageService.add({
        severity: 'success',
        summary: 'Password Reset',
        detail: 'Your password has been reset successfully. You can now log in with your new password.',
        life: 6000,
      });

      // Navigate to login after 2 seconds
      setTimeout(() => {
        this.navigateToAuth();
      }, 2000);
    } catch (error) {
      console.error('Reset password failed:', error);

      let errorMessage = 'Failed to reset password. Please try again.';
      if (error instanceof HttpErrorResponse) {
        errorMessage = error.error?.message || error.message || errorMessage;

        // Check if token is invalid/expired
        if (errorMessage.includes('Invalid or expired')) {
          this.invalidToken.set(true);
        }
      }

      this.messageService.add({
        severity: 'error',
        summary: 'Reset Failed',
        detail: errorMessage,
      });
    } finally {
      this.loading.set(false);
    }
  }
}

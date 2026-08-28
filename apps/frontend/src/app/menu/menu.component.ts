import { ChangeDetectionStrategy, Component, computed, inject, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { Menu } from 'primeng/menu';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
import { environment } from '../../environments/environment';

type PrimaryNavigationLink = {
  label: string;
  path: string;
  isExact: boolean;
};

// Shared fixtures that anyone can sign into, so account-altering actions are
// blocked on them to keep the public demo usable for the next visitor.
const SHARED_DEMO_ACCOUNT_EMAILS = [
  'test-customer@velocity.de',
  'test-trainer@velocity.de',
  'test-admin@velocity.de',
];

@Component({
  selector: 'app-menu',
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    Menu,
    ChangePasswordDialogComponent,
    ConfirmDialog,
  ],
  providers: [ConfirmationService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  private readonly router = inject(Router);
  protected readonly authService = inject(AuthService);
  protected readonly userService = inject(UserService);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);

  protected readonly primaryLinks: PrimaryNavigationLink[] = [
    { label: 'Rides', path: '/training-sessions', isExact: false },
    { label: 'Pricing', path: '/pricing', isExact: false },
    { label: 'My bookings', path: '/my-bookings', isExact: false },
  ];

  private readonly profileMenu = viewChild<Menu>('profileMenu');
  protected readonly isMobileNavOpen = signal(false);
  protected readonly showChangePasswordDialog = signal(false);

  protected readonly userInitials = computed(() => {
    const user = this.userService.getCurrentUserSignal();
    if (!user) return '';

    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
  });

  protected readonly profileMenuItems = computed<MenuItem[]>(() => [
    {
      label: 'My Bookings',
      icon: 'pi pi-calendar',
      command: (): void => this.navigateMyBookings(),
    },
    {
      label: 'Change Password',
      icon: 'pi pi-lock',
      command: (): void => this.openChangePasswordDialog(),
    },
    // The backend only serves stored demo emails outside production, so the
    // page has nothing to show once deployed - keep it out of the menu there.
    ...(environment.production
      ? []
      : [{ label: 'Email History', icon: 'pi pi-envelope', command: (): void => this.openEmailHistory() }]),
    {
      label: 'Delete Account',
      icon: 'pi pi-trash',
      styleClass: 'text-red-400',
      command: (): void => this.confirmDeleteAccount(),
    },
    { separator: true },
    {
      label: 'Sign Out',
      icon: 'pi pi-sign-out',
      command: (): void => this.logOut(),
    },
  ]);

  protected toggleMobileNav(): void {
    this.isMobileNavOpen.update(isOpen => !isOpen);
  }

  protected closeMobileNav(): void {
    this.isMobileNavOpen.set(false);
  }

  protected showProfileMenu(event: Event): void {
    this.profileMenu()?.toggle(event);
  }

  protected navigateMyBookings(): void {
    void this.router.navigate(['/my-bookings']);
  }

  protected openEmailHistory(): void {
    void this.router.navigate(['/email-history']);
  }

  protected closeChangePasswordDialog(): void {
    this.showChangePasswordDialog.set(false);
  }

  protected logOut(): void {
    this.authService.logOut().subscribe();
  }

  protected openChangePasswordDialog(): void {
    if (this.isSignedInAsSharedDemoAccount()) {
      this.showSharedDemoAccountNotice(
        'Password changes are not available for demo accounts. These accounts are shared for testing purposes. Please register a new account to try the password change feature.',
      );
      return;
    }

    this.showChangePasswordDialog.set(true);
  }

  protected confirmDeleteAccount(): void {
    if (this.isSignedInAsSharedDemoAccount()) {
      this.showSharedDemoAccountNotice(
        'Account deletion is not available for demo accounts. These accounts are shared for testing purposes.',
      );
      return;
    }

    this.confirmationService.confirm({
      header: 'Delete Account',
      message:
        'Are you sure you want to permanently delete your account? This action cannot be undone and all your data will be permanently removed.',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => this.deleteAccount(),
    });
  }

  private isSignedInAsSharedDemoAccount(): boolean {
    const currentUser = this.userService.getCurrentUserSignal();
    return currentUser !== null && SHARED_DEMO_ACCOUNT_EMAILS.includes(currentUser.email);
  }

  private showSharedDemoAccountNotice(detail: string): void {
    this.messageService.add({ severity: 'info', summary: 'Demo Account', detail, life: 6000 });
  }

  private deleteAccount(): void {
    this.userService.deleteAccount().subscribe({
      next: () => this.onAccountDeleted(),
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'Delete Failed',
          detail: 'Failed to delete account. Please try again.',
          life: 5000,
        }),
    });
  }

  private onAccountDeleted(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Account Deleted',
      detail: 'Your account has been permanently deleted.',
      life: 3000,
    });
    setTimeout(() => this.authService.logOut().subscribe(), 1000);
  }
}

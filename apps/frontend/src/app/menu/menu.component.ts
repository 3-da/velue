import { ChangeDetectionStrategy, Component, computed, HostListener, inject, signal, viewChild } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { TrainingType } from '@velue/shared-data-access';
import { Menu } from 'primeng/menu';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-menu',
  imports: [
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
    NgOptimizedImage,
    Button,
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
  private router = inject(Router);
  protected authService = inject(AuthService);
  protected userService = inject(UserService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  protected readonly items = computed<MenuItem[]>(() => [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: (): void => this.navigateHome(),
    },
    {
      label: 'Pricing',
      icon: 'pi pi-euro',
      command: (): void => this.navigatePricing(),
    },
    {
      label: 'Book a Ride',
      icon: 'pi pi-calendar-plus',
      styleClass: 'book-ride-item',
      command: (): void => this.navigateBooking(),
    },
  ]);

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
    {
      label: 'Email History',
      icon: 'pi pi-envelope',
      command: (): void => this.openEmailHistory(),
    },
    {
      label: 'Delete Account',
      icon: 'pi pi-trash',
      styleClass: 'text-red-500',
      command: (): void => this.confirmDeleteAccount(),
    },
    {
      separator: true,
    },
    {
      label: 'Sign Out',
      icon: 'pi pi-sign-out',
      command: (): void => this.logOut(),
    },
  ]);
  private readonly windowWidth = signal(window.innerWidth);
  protected readonly showChangePasswordDialog = signal(false);

  protected readonly buttonSize = computed((): 'small' | 'large' => {
    const width = this.windowWidth();
    if (width < 640) return 'small';
    return 'large';
  });

  protected readonly avatarSize = computed(() => {
    const width = this.windowWidth();
    return width < 640 ? 'normal' : 'large';
  });
  private readonly profileMenu = viewChild<Menu>('profileMenu');


  private formatTrainingType(trainingType: TrainingType): string {
    return trainingType
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  protected navigateHome(): void {
    void this.router.navigate(['/']);
  }

  protected navigatePricing(): void {
    void this.router.navigate(['/pricing']);
  }

  protected navigateBooking(): void {
    void this.router.navigate(['/training-sessions']);
  }

  protected navigateAuth(): void {
    void this.router.navigate(['/auth']);
  }

  protected navigateMyBookings(): void {
    void this.router.navigate(['/my-bookings']);
  }

  protected openChangePasswordDialog(): void {
    const currentUser = this.userService.getCurrentUserSignal();
    const demoEmails = ['test-customer@velue.de', 'test-trainer@velue.de', 'test-admin@velue.de'];
    
    if (currentUser && demoEmails.includes(currentUser.email)) {
      this.showDemoAccountMessage();
      return;
    }
    
    this.showChangePasswordDialog.set(true);
  }

  protected showDemoAccountMessage(): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Demo Account',
      detail: 'Password changes are not available for demo accounts. These accounts are shared for testing purposes. Please register a new account to try the password change feature.',
      life: 6000,
    });
  }

  protected closeChangePasswordDialog(): void {
    this.showChangePasswordDialog.set(false);
  }

  protected openEmailHistory(): void {
    void this.router.navigate(['/email-history']);
  }

  protected showProfileMenu(event: Event): void {
    this.profileMenu()?.toggle(event);
  }

  protected logOut(): void {
    this.authService.logOut().subscribe();
  }

  protected confirmDeleteAccount(): void {
    const currentUser = this.userService.getCurrentUserSignal();
    const demoEmails = ['test-customer@velue.de', 'test-trainer@velue.de', 'test-admin@velue.de'];

    if (currentUser && demoEmails.includes(currentUser.email)) {
      this.messageService.add({
        severity: 'info',
        summary: 'Demo Account',
        detail: 'Account deletion is not available for demo accounts. These accounts are shared for testing purposes.',
        life: 6000,
      });
      return;
    }

    this.confirmationService.confirm({
      header: 'Delete Account',
      message: 'Are you sure you want to permanently delete your account? This action cannot be undone and all your data will be permanently removed.',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.deleteAccount();
      },
    });
  }

  protected deleteAccount(): void {
    this.userService.deleteAccount().subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Account Deleted',
          detail: 'Your account has been permanently deleted.',
          life: 3000,
        });
        setTimeout(() => {
          this.authService.logOut().subscribe();
        }, 1000);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Delete Failed',
          detail: 'Failed to delete account. Please try again.',
          life: 5000,
        });
      },
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.windowWidth.set(window.innerWidth);
  }
}

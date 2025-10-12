import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {CoinsPackageResponse} from '@velue/shared-models';
import {CoinsService} from '../../shared/services/coins.service';
import {UserService} from '../../shared/services/user.service';
import {MessageService} from 'primeng/api';
import {AuthService} from '../../shared/services/auth.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-coins',
  imports: [],
  templateUrl: './coins.component.html',
  styleUrl: './coins.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinsComponent implements OnInit {
  private readonly coinsService = inject(CoinsService);
  private readonly userService = inject(UserService);
  private readonly messageService = inject(MessageService);
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);

  readonly coinPackages = signal<CoinsPackageResponse[]>([]);
  readonly isLoading = signal(false);

  ngOnInit(): void {
    this.loadCoinPackages();
  }

  private loadCoinPackages(): void {
    this.isLoading.set(true);
    this.coinsService
      .getAllCoinPackages()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: packages => {
          this.coinPackages.set(packages);
          this.isLoading.set(false);
        },
        error: error => {
          console.error('Error loading coins packages:', error);
          this.isLoading.set(false);
        },
      });
  }

  purchaseCoins(coinsPackage: CoinsPackageResponse): void {
    console.log('Purchasing coins package:', coinsPackage);

    if (!this.authService.isAuthenticated()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Authentication Required',
        detail: 'Please sign in to purchase coins.',
      });
      return;
    }

    const currentUser = this.userService.getCurrentUserSignal();
    if (!currentUser) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Authentication Required',
        detail: 'Please sign in to purchase coins.',
      });
      return;
    }

    this.coinsService
      .createStripeCheckoutSession(coinsPackage.stripePriceId, currentUser.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: response => {
          // Redirect to Stripe checkout
          window.location.href = response.url;
        },
        error: error => {
          console.error('Error creating checkout session:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Payment Error',
            detail: 'Failed to create checkout session. Please try again.',
          });
        },
      });
  }
}

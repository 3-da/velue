import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CoinsPackageResponse } from '@velocity/shared-models';
import { MessageService } from 'primeng/api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CoinsService } from '../../shared/services/coins.service';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-coins',
  imports: [CurrencyPipe, EmptyStateComponent],
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

  protected readonly sortedPackages = computed(() =>
    [...this.coinPackages()].sort((left, right) => left.coins - right.coins),
  );

  protected readonly bestValuePackageId = computed(() => {
    const packages = this.sortedPackages();
    if (packages.length === 0) return null;

    const cheapestPerCredit = packages.reduce((best, candidate) =>
      getPricePerCredit(candidate) < getPricePerCredit(best) ? candidate : best,
    );
    return cheapestPerCredit.id;
  });

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
    if (!this.isSignedIn()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Sign in required',
        detail: 'Please sign in to buy a credit pack.',
      });
      return;
    }

    this.coinsService
      .createStripeCheckoutSession(coinsPackage.stripePriceId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: response => (window.location.href = response.url),
        error: error => this.onCheckoutFailed(error),
      });
  }

  private isSignedIn(): boolean {
    return this.authService.isAuthenticated() && this.userService.getCurrentUserSignal() !== null;
  }

  private onCheckoutFailed(error: unknown): void {
    console.error('Error creating checkout session:', error);
    this.messageService.add({
      severity: 'error',
      summary: 'Payment Error',
      detail: 'Failed to start checkout. Please try again.',
    });
  }
}

function getPricePerCredit(coinsPackage: CoinsPackageResponse): number {
  return coinsPackage.coins > 0 ? coinsPackage.price / coinsPackage.coins : Number.POSITIVE_INFINITY;
}

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  Signal,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { firstValueFrom, startWith, Subject, switchMap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { TrainingSessionWithDetails } from '@velocity/shared-models';
import { TrainingSessionsService } from '../../shared/services/training-sessions.service';
import { AuthService } from '../../shared/services/auth.service';
import { BookingService } from '../../shared/services/booking.service';
import { UserService } from '../../shared/services/user.service';
import { PaymentService } from '../../shared/services/payment.service';
import { extractHttpErrorMessage } from '../../shared/utils/http-error-message';
import { RideRowComponent } from '../../shared/components/ride-row/ride-row.component';
import { RideDayTabsComponent } from '../../shared/components/ride-day-tabs/ride-day-tabs.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import {
  findUserBookingId,
  groupSessionsByRideDay,
  hasUserBookedSession,
} from '../../shared/utils/session-booking.utils';

@Component({
  selector: 'app-training-sessions',
  imports: [DatePipe, RideRowComponent, RideDayTabsComponent, EmptyStateComponent],
  templateUrl: './training-sessions.component.html',
  styleUrl: './training-sessions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingSessionsComponent {
  private readonly trainingSessionsService = inject(TrainingSessionsService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly messageService = inject(MessageService);
  private readonly bookingService = inject(BookingService);
  private readonly userService = inject(UserService);
  private readonly paymentService = inject(PaymentService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);

  private readonly refreshTrigger = new Subject<void>();
  private readonly queryParams = toSignal(this.route.queryParams);
  private readonly paymentStatus = computed(() => this.queryParams()?.['payment']);
  private readonly sessionId = computed(() => this.queryParams()?.['session_id']);

  protected readonly upcomingSessions: Signal<TrainingSessionWithDetails[] | undefined> = toSignal(
    this.refreshTrigger.pipe(
      startWith(null),
      switchMap(() => this.trainingSessionsService.getUpcomingTrainingSessions()),
    ),
    { initialValue: [] },
  );

  protected readonly rideDays = computed(() => groupSessionsByRideDay(this.upcomingSessions() ?? []));

  private readonly userSelectedDateKey = signal('');
  private paymentProcessed = false;

  protected readonly selectedDateKey = computed(() => {
    const userSelected = this.userSelectedDateKey();
    if (userSelected) return userSelected;

    return this.rideDays()[0]?.dateKey ?? '';
  });

  // Credit the coins once when returning from Stripe. The guard stops a re-emit
  // of queryParams from processing the same session twice before navigation clears it.
  private readonly paymentEffect = effect(() => {
    const status = this.paymentStatus();
    const sessionId = this.sessionId();

    if (status !== 'success' || !sessionId || this.paymentProcessed) return;

    this.paymentProcessed = true;
    this.processPaymentSuccess(sessionId);
    this.clearQueryParams();
  });

  protected selectDay(dateKey: string): void {
    this.userSelectedDateKey.set(dateKey);
  }

  protected isBookedByCurrentUser(session: TrainingSessionWithDetails): boolean {
    const user = this.userService.getCurrentUserSignal();
    return user ? hasUserBookedSession(session, user.id) : false;
  }

  protected async bookSession(trainingSessionId: string): Promise<void> {
    if (!this.authService.isAuthenticated()) {
      this.showAuthenticationRequiredNotice();
      return;
    }

    try {
      // The backend derives the booking owner from the auth token, so the
      // client only needs to name the session.
      await firstValueFrom(this.bookingService.createBooking(trainingSessionId));
      this.refreshData();
      this.showSuccess('Booking Confirmed', 'Your training session has been booked successfully!');
    } catch (error) {
      this.showError('Booking Failed', error, 'Failed to book the session. Please try again.');
    }
  }

  protected async cancelBooking(session: TrainingSessionWithDetails): Promise<void> {
    const bookingId = this.findCurrentUserBookingId(session);
    if (!bookingId) {
      this.showError('Cancellation Failed', null, 'No booking found for this session.');
      return;
    }

    try {
      await firstValueFrom(this.bookingService.cancelBooking(bookingId));
      this.refreshData();
      this.showSuccess('Booking Cancelled', 'Your booking has been cancelled successfully!');
    } catch (error) {
      this.showError('Cancellation Failed', error, 'Failed to cancel the booking. Please try again.');
    }
  }

  private findCurrentUserBookingId(session: TrainingSessionWithDetails): string | null {
    const user = this.userService.getCurrentUserSignal();
    return user ? findUserBookingId(session, user.id) : null;
  }

  private processPaymentSuccess(sessionId: string): void {
    this.paymentService
      .processPaymentSuccess(sessionId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: result => this.onPaymentProcessed(result.success, result.coinsAdded),
        error: () =>
          this.showError(
            'Payment Processing Error',
            null,
            'Payment was successful but there was an issue adding coins. Please contact support.',
          ),
      });
  }

  private onPaymentProcessed(isSuccessful: boolean, coinsAdded: number | undefined): void {
    if (!isSuccessful || !coinsAdded) return;

    this.showSuccess('Payment Successful!', `${coinsAdded} credits added to your account. You can now book rides!`);
    this.userService.getCurrentUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  private clearQueryParams(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      replaceUrl: true,
    });
  }

  private refreshData(): void {
    this.refreshTrigger.next();
    this.userService.getCurrentUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  private showAuthenticationRequiredNotice(): void {
    this.messageService.add({
      severity: 'warn',
      summary: 'Authentication Required',
      detail: 'Please sign in to book a ride.',
    });
  }

  private showSuccess(summary: string, detail: string): void {
    this.messageService.add({ severity: 'success', summary, detail });
  }

  private showError(summary: string, error: unknown, fallbackDetail: string): void {
    const detail = error ? extractHttpErrorMessage(error, fallbackDetail) : fallbackDetail;
    this.messageService.add({ severity: 'error', summary, detail });
  }
}

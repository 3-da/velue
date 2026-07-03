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
import { TrainingSessionsService } from '../../shared/services/training-sessions.service';
import { TrainingSessionWithDetails } from '@velue/shared-models';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { DatePipe, LowerCasePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TrainingSessionTitlePipe } from '../../shared/pipes/training-session-title.pipe';
import { TrainingStartTimePipe } from '../../shared/pipes/training-start-time.pipe';
import { TabsModule } from 'primeng/tabs';
import { Tag } from 'primeng/tag';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { MessageService } from 'primeng/api';
import { BookingService } from '../../shared/services/booking.service';
import { UserService } from '../../shared/services/user.service';
import { PaymentService } from '../../shared/services/payment.service';
import { firstValueFrom, startWith, Subject, switchMap } from 'rxjs';
import { extractHttpErrorMessage } from '../../shared/utils/http-error-message';
import {
  findUserBookingId,
  getSessionAvailabilityStatus,
  getSessionStatusColor,
  hasUserBookedSession,
  isSessionFull,
} from '../../shared/utils/session-booking.utils';

@Component({
  selector: 'app-training-sessions',
  imports: [
    DatePipe,
    CardModule,
    ButtonModule,
    TabsModule,
    TrainingSessionTitlePipe,
    TrainingStartTimePipe,
    Tag,
    LowerCasePipe,
  ],
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

  protected readonly groupedSessionsByDate = computed(() => {
    const sessions = this.upcomingSessions();
    if (!sessions) return {};

    return sessions.reduce((groups: { [key: string]: TrainingSessionWithDetails[] }, session) => {
      if (!session.date) return groups;

      const dateKey = new Date(session.date).toDateString();
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(session);
      return groups;
    }, {});
  });

  protected readonly uniqueDates = computed(() => {
    const grouped = this.groupedSessionsByDate();
    return Object.keys(grouped).map(dateKey => {
      const sessions = grouped[dateKey];
      return {
        dateKey,
        date: sessions[0]?.date,
        sessions: sessions,
      };
    });
  });

  private readonly _selectedTab = signal('');
  private paymentProcessed = false;

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

  protected readonly selectedTab = computed(() => {
    const userSelected = this._selectedTab();
    if (userSelected) return userSelected;

    const dates = this.uniqueDates();
    return dates.length > 0 ? dates[0].dateKey : '';
  });

  private processPaymentSuccess(sessionId: string): void {
    this.paymentService
      .processPaymentSuccess(sessionId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: result => {
          if (result.success && result.coinsAdded) {
            this.messageService.add({
              severity: 'success',
              summary: 'Payment Successful!',
              detail: `${result.coinsAdded} coins added to your account. You can now book training sessions!`,
            });

            // Refresh user data to show new coin balance
            this.userService.getCurrentUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
          }
        },
        error: error => {
          console.error('Payment processing error:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Payment Processing Error',
            detail: 'Payment was successful but there was an issue adding coins. Please contact support.',
          });
        },
      });
  }

  private clearQueryParams(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      replaceUrl: true,
    });
  }

  protected setSelectedTab(dateKey: string): void {
    this._selectedTab.set(dateKey);
  }

  protected getStatusColor(session: TrainingSessionWithDetails): 'secondary' | 'success' | 'danger' {
    return getSessionStatusColor(session);
  }

  protected getAvailabilityStatus(session: TrainingSessionWithDetails): 'success' | 'warn' | 'danger' {
    return getSessionAvailabilityStatus(session);
  }

  protected isSessionFull(session: TrainingSessionWithDetails): boolean {
    return isSessionFull(session);
  }

  protected hasUserBookedSession(session: TrainingSessionWithDetails): boolean {
    const user = this.userService.getCurrentUserSignal();
    return user ? hasUserBookedSession(session, user.id) : false;
  }

  protected getUserBookingId(session: TrainingSessionWithDetails): string | null {
    const user = this.userService.getCurrentUserSignal();
    return user ? findUserBookingId(session, user.id) : null;
  }

  private refreshData(): void {
    // Trigger refresh of training sessions
    this.refreshTrigger.next();
    // Refresh user data to update coins
    this.userService.getCurrentUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  protected async bookSession(trainingSessionId: string): Promise<void> {
    // Check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Authentication Required',
        detail: 'Please sign in to book a session.',
      });
      return;
    }

    try {
      // The backend derives the booking owner from the auth token, so the
      // client only needs to name the session.
      await firstValueFrom(this.bookingService.createBooking(trainingSessionId));

      // Refresh data to update UI
      this.refreshData();

      this.messageService.add({
        severity: 'success',
        summary: 'Booking Confirmed',
        detail: `Your training session has been booked successfully!`,
      });
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Booking Failed',
        detail: extractHttpErrorMessage(error, 'Failed to book the session. Please try again.'),
      });
    }
  }

  protected async cancelBooking(session: TrainingSessionWithDetails): Promise<void> {
    const bookingId = this.getUserBookingId(session);
    if (!bookingId) {
      this.messageService.add({
        severity: 'error',
        summary: 'Cancellation Failed',
        detail: 'No booking found for this session.',
      });
      return;
    }

    try {
      await firstValueFrom(this.bookingService.cancelBooking(bookingId));

      // Refresh data to update UI
      this.refreshData();

      this.messageService.add({
        severity: 'success',
        summary: 'Booking Cancelled',
        detail: 'Your booking has been cancelled successfully!',
      });
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Cancellation Failed',
        detail: extractHttpErrorMessage(error, 'Failed to cancel the booking. Please try again.'),
      });
    }
  }
}

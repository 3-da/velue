import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, Signal, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { firstValueFrom, startWith, Subject, switchMap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { TrainingSessionWithDetails } from '@velocity/shared-models';
import { TrainingSessionsService } from '../../shared/services/training-sessions.service';
import { BookingService } from '../../shared/services/booking.service';
import { UserService } from '../../shared/services/user.service';
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
  selector: 'app-my-bookings',
  imports: [DatePipe, RideRowComponent, RideDayTabsComponent, EmptyStateComponent],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyBookingsComponent {
  private readonly trainingSessionsService = inject(TrainingSessionsService);
  private readonly messageService = inject(MessageService);
  private readonly bookingService = inject(BookingService);
  private readonly userService = inject(UserService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly refreshTrigger = new Subject<void>();

  protected readonly upcomingSessions: Signal<TrainingSessionWithDetails[] | undefined> = toSignal(
    this.refreshTrigger.pipe(
      startWith(null),
      switchMap(() => this.trainingSessionsService.getUpcomingTrainingSessions()),
    ),
    { initialValue: [] },
  );

  protected readonly myBookedSessions = computed(() => {
    const sessions = this.upcomingSessions();
    const user = this.userService.getCurrentUserSignal();

    if (!sessions || !user) return [];

    return sessions.filter(session => hasUserBookedSession(session, user.id));
  });

  protected readonly rideDays = computed(() => groupSessionsByRideDay(this.myBookedSessions()));

  private readonly userSelectedDateKey = signal('');

  protected readonly selectedDateKey = computed(() => {
    const userSelected = this.userSelectedDateKey();
    if (userSelected) return userSelected;

    return this.rideDays()[0]?.dateKey ?? '';
  });

  protected selectDay(dateKey: string): void {
    this.userSelectedDateKey.set(dateKey);
  }

  protected async cancelBooking(session: TrainingSessionWithDetails): Promise<void> {
    const bookingId = this.findCurrentUserBookingId(session);
    if (!bookingId) {
      this.showError('No booking found for this session.');
      return;
    }

    try {
      await firstValueFrom(this.bookingService.cancelBooking(bookingId));
      this.refreshData();
      this.messageService.add({
        severity: 'success',
        summary: 'Booking Cancelled',
        detail: 'Your booking has been cancelled successfully!',
      });
    } catch (error) {
      this.showError(extractHttpErrorMessage(error, 'Failed to cancel the booking. Please try again.'));
    }
  }

  private findCurrentUserBookingId(session: TrainingSessionWithDetails): string | null {
    const user = this.userService.getCurrentUserSignal();
    return user ? findUserBookingId(session, user.id) : null;
  }

  private refreshData(): void {
    this.refreshTrigger.next();
    this.userService.getCurrentUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  private showError(detail: string): void {
    this.messageService.add({ severity: 'error', summary: 'Cancellation Failed', detail });
  }
}

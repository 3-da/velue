import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
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
import { MessageService } from 'primeng/api';
import { BookingService } from '../../shared/services/booking.service';
import { UserService } from '../../shared/services/user.service';
import { firstValueFrom, startWith, Subject, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-bookings',
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

  // Filter sessions to show only user's bookings
  protected readonly myBookedSessions = computed(() => {
    const sessions = this.upcomingSessions();
    const user = this.userService.getCurrentUserSignal();

    if (!sessions || !user) return [];

    return sessions.filter(session =>
      session.bookings.some(
        booking => booking.userId === user.id &&
                  (booking.status === 'PENDING' || booking.status === 'CONFIRMED')
      )
    );
  });

  protected readonly groupedSessionsByDate = computed(() => {
    const sessions = this.myBookedSessions();
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

  protected readonly selectedTab = computed(() => {
    const userSelected = this._selectedTab();
    if (userSelected) return userSelected;

    const dates = this.uniqueDates();
    return dates.length > 0 ? dates[0].dateKey : '';
  });

  protected setSelectedTab(dateKey: string): void {
    this._selectedTab.set(dateKey);
  }

  protected getStatusColor(session: TrainingSessionWithDetails): 'secondary' | 'success' | 'danger' {
    switch (session.status) {
      case 'SCHEDULED':
        return 'success';
      case 'COMPLETED':
        return 'secondary';
      case 'CANCELLED':
        return 'danger';
    }
  }

  protected getAvailabilityStatus(session: TrainingSessionWithDetails): 'success' | 'warn' | 'danger' {
    const booked = session.bookings?.length || 0;
    const capacity = session.maxParticipants;
    const occupancyRate = booked / capacity;

    if (occupancyRate <= 0.5) {
      return 'success';
    } else if (occupancyRate <= 0.8) {
      return 'warn';
    } else {
      return 'danger';
    }
  }

  protected getUserBookingId(session: TrainingSessionWithDetails): string | null {
    const user = this.userService.getCurrentUserSignal();
    if (!user || !session.bookings) return null;

    const booking = session.bookings.find(
      userBooking =>
        userBooking.userId === user.id && (userBooking.status === 'PENDING' || userBooking.status === 'CONFIRMED'),
    );

    return booking?.id || null;
  }

  private refreshData(): void {
    this.refreshTrigger.next();
    this.userService.getCurrentUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
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

      this.refreshData();

      this.messageService.add({
        severity: 'success',
        summary: 'Booking Cancelled',
        detail: 'Your booking has been cancelled successfully!',
      });
    } catch (error) {
      console.error('Cancellation failed:', error);

      let errorMessage = 'Failed to cancel the booking. Please try again.';
      if (error instanceof HttpErrorResponse) {
        errorMessage = error.error?.message || error.message || errorMessage;
      }

      this.messageService.add({
        severity: 'error',
        summary: 'Cancellation Failed',
        detail: errorMessage,
      });
    }
  }
}

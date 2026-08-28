import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { TrainingSessionWithDetails } from '@velocity/shared-models';
import { TrainingSessionTitlePipe } from '../../pipes/training-session-title.pipe';
import { TrainingStartTimePipe } from '../../pipes/training-start-time.pipe';
import {
  countActiveBookingsForSession,
  getRideAvailabilityLabel,
  getSessionOccupancyPercent,
  isRideAlmostFull,
  isSessionFull,
} from '../../utils/session-booking.utils';

@Component({
  selector: 'app-ride-row',
  imports: [LowerCasePipe, TrainingSessionTitlePipe, TrainingStartTimePipe],
  templateUrl: './ride-row.component.html',
  styleUrl: './ride-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RideRowComponent {
  readonly session = input.required<TrainingSessionWithDetails>();
  readonly isBookedByUser = input<boolean>(false);
  readonly bookRequested = output<string>();
  readonly cancelRequested = output<TrainingSessionWithDetails>();

  protected readonly bookedCount = computed(() => countActiveBookingsForSession(this.session()));
  protected readonly occupancyPercent = computed(() => getSessionOccupancyPercent(this.session()));
  protected readonly isFull = computed(() => isSessionFull(this.session()));
  protected readonly availabilityLabel = computed(() => getRideAvailabilityLabel(this.session()));
  protected readonly isScheduled = computed(() => this.session().status === 'SCHEDULED');
  protected readonly isLimited = computed(() => isRideAlmostFull(this.session()));
}

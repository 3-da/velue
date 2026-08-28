import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RideDay } from '../../utils/session-booking.utils';

@Component({
  selector: 'app-ride-day-tabs',
  imports: [DatePipe],
  templateUrl: './ride-day-tabs.component.html',
  styleUrl: './ride-day-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RideDayTabsComponent {
  readonly days = input.required<RideDay[]>();
  readonly selectedDateKey = input.required<string>();
  readonly daySelected = output<string>();
}

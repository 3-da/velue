import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

type StudioStat = {
  value: string;
  label: string;
};

type BookingStep = {
  index: string;
  title: string;
  body: string;
};

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly studioStats: StudioStat[] = [
    { value: '45', label: 'Minutes per ride' },
    { value: '20', label: 'Bikes per studio' },
    { value: '24h', label: 'Free cancellation' },
  ];

  protected readonly bookingSteps: BookingStep[] = [
    {
      index: '01',
      title: 'Pick your pack',
      body: 'Buy credits once and spend them whenever you like. No membership, no lock-in, no monthly fee.',
    },
    {
      index: '02',
      title: 'Claim a bike',
      body: 'Browse the week, pick a time that fits and reserve your spot. One credit, one bike, confirmed instantly.',
    },
    {
      index: '03',
      title: 'Clip in',
      body: 'Arrive ten minutes early. Shoes and towels are on us. Change your mind up to 24 hours before and the credit comes straight back.',
    },
  ];
}

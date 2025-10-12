import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startTime',
})
export class TrainingStartTimePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const startTime = value.slice(-4);
    return `${startTime.slice(0, 2)}:${startTime.slice(2)}`;
  }
}

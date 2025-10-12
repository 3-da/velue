import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sessionTitle',
})
export class TrainingSessionTitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Split by underscore and convert each part
    const parts = value.toLowerCase().split('_');

    return parts.map(part => {
      // Special case for HIIT - make it uppercase
      if (part.toLowerCase() === 'hiit') {
        return 'HIIT';
      }
      // Capitalize first letter of each word
      return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
  }
}

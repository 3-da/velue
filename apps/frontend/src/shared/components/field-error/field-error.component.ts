import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-field-error',
  template: `<small aria-live="polite" class="field-error">{{ message() }}</small>`,
  styles: `
    .field-error {
      display: block;
      min-height: 1.25rem;
      padding-top: 0.25rem;
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: #f87171;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldErrorComponent {
  readonly message = input<string | null>(null);
}

import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
@Directive({
  selector: '[appDuration]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DurationDirective,
      multi: true,
    },
  ],
})
export class DurationDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('durationFilter') duration: string;
  validate(control: AbstractControl): { [key: string]: boolean } | null {
    const pattern: RegExp = /^[0-9]+$/;
    const valid = !control.value || pattern.test(control.value);
    if (valid) {
      return { duration: false };
    } else {
      return { duration: true };
    }
  }
}

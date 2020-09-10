import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';
@Directive({
  selector: '[customDate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('dateFilter') dateFilter: string;
  validate(control: AbstractControl): { [key: string]: boolean } | null {
    const pattern: RegExp = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    const valid = !control.value || pattern.test(control.value);
    if (valid) {
      return null;
    } else {
      return { customDate: true };
    }
  }
}

import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef((): unknown => DurationComponent),
      multi: true,
    },
  ],
})
export class DurationComponent implements ControlValueAccessor {
  duration: string;
  onChange: (newDuration: string) => void;
  onTouch: () => void;
  writeValue(newDuration: string): void {
    this.duration = newDuration ? newDuration : '';
  }
  registerOnChange(fn: (newDuration: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
}

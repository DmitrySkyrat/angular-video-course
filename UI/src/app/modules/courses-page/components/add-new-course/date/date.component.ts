import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef((): unknown => DateComponent),
      multi: true,
    },
  ],
})
export class DateComponent implements ControlValueAccessor, OnInit {
  public date: string;
  public onChange: (newDate: string) => void;
  public onTouch: () => void;
  ngOnInit(): void {}
  writeValue(newDate: string): void {
    this.date = newDate ? newDate : '';
  }
  registerOnChange(fn: (newDate: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
}

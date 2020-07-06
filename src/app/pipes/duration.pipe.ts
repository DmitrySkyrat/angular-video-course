import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hourCoefficient: number = duration / 60;
    const minutes: number = duration % 60;
    if (hourCoefficient < 1 && minutes === 1) {
      return minutes + 'mm';
    }
    if (hourCoefficient < 1) {
      return minutes + 'min';
    }
    if (hourCoefficient >= 1 && hourCoefficient < 2 && minutes === 1) {
      return '1' + 'h ' + minutes + 'mm';
    }
    if (hourCoefficient >= 1 && hourCoefficient < 2 && minutes > 1) {
      return '1' + 'h ' + minutes + 'min';
    }
    return (duration - minutes) / 60 + 'hh ' + minutes + 'min';
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../models/course-item.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: ICourse[]): ICourse[] {
    return courses.sort(
      (a: ICourse, b: ICourse): number =>
        +new Date(a.creationDate) - +new Date(b.creationDate)
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../models/course.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: ICourse[]): ICourse[] {
    console.log('order source', courses);
    if (courses) {
      return courses
        .concat()
        .sort(
          (a: ICourse, b: ICourse): number =>
            +new Date(a.date) - +new Date(b.date)
        );
    }
  }
}

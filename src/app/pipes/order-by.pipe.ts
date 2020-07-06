import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course-item.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    return courses.sort(
      (a: Course, b: Course) => +(new Date(a.creationDate)) - +(new Date(b.creationDate))
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../models/course.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    courses: ICourse[],
    searchText: string,
    defaultCourseArray: ICourse[]
  ): ICourse[] {
    if (!searchText.trim()) {
      return defaultCourseArray;
    }
    return courses.filter((course: ICourse): boolean => {
      return course.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}

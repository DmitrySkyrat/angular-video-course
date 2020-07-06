import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../models/course-item.model';

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
    console.log(searchText);

    return courses.filter((course: ICourse): boolean => {
      return course.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}

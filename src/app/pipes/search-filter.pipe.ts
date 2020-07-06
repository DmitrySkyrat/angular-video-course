import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course-item.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    courses: Course[],
    searchText: string,
    defaultCourseArray: Course[]
  ): Course[] {
    if (!searchText.trim()) {
      return defaultCourseArray;
    }
    return courses.filter((course: Course) => {
      return course.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}

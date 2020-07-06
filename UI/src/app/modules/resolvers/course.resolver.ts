import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { CoursesService } from '../courses-page/services/courses.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<void> {
  constructor(private courseService: CoursesService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    if (+route.params['id']) {
      console.log('base resolver', +route.params['id']);
      this.courseService.getBreadcrumb(+route.params['id']);
    } else if (route.params['id'] === 'new') {
      this.courseService.breadcrumb = '/ Create a new course';
    } else {
      this.courseService.breadcrumb = '';
    }
  }
}

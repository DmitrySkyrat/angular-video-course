import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './components/courses-page.component';
import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';
import { CourseResolver } from '../resolvers/course.resolver';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
    resolve: { course: CourseResolver },
  },
  {
    path: ':id',
    component: AddNewCourseComponent,
    resolve: { course: CourseResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}

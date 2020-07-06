import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './components/courses-page.component';
import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';

const routes: Routes = [
  { path: '', component: CoursesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}

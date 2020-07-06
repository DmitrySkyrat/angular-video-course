import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './components/courses-page.component';
import { CourseComponent } from './components/course/course.component';
import { AddNewCourseComponent } from './components/add-new-course/add-new-course.component';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CreationDateDirective } from './directives/creation-date.directive';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    AddNewCourseComponent,
    OrderByPipe,
    DurationPipe,
    SearchFilterPipe,
    CreationDateDirective,
  ],
  imports: [CommonModule, FormsModule, CoursesPageRoutingModule],
  exports: [],
})
export class CoursesPageModule {}

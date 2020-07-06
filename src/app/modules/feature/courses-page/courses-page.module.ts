import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './components/courses-page.component';
import { CourseComponent } from './components/course/course.component';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CreationDateDirective } from './directives/creation-date.directive';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    OrderByPipe,
    DurationPipe,
    SearchFilterPipe,
    CreationDateDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CoursesPageComponent }]),
  ],
  exports: [RouterModule],
})
export class CoursesPageModule {}

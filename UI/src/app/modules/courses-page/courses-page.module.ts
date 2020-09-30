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
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AuthorsComponent } from './components/add-new-course/authors/authors.component';
import { MaterialModule } from '../material/material.module';
import { DateComponent } from './components/add-new-course/date/date.component';
import { DurationComponent } from './components/add-new-course/duration/duration.component';
import { DateValidatorDirective } from './validators/date-validator.directive';
import { DurationDirective } from './validators/duration-validator.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseComponent,
    AddNewCourseComponent,
    OrderByPipe,
    DurationPipe,
    SearchFilterPipe,
    CreationDateDirective,
    AuthorsComponent,
    DateComponent,
    DurationComponent,
    DateValidatorDirective,
    DurationDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CoursesPageRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [TranslateModule],
  providers: [SearchFilterPipe],
})
export class CoursesPageModule {}

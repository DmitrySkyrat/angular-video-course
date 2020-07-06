import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/login/login.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseComponent } from './courses-page/course/course.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CreationDateDirective } from './directives/creation-date.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CoursesPageComponent,
    CourseComponent,
    BreadcrumbsComponent,
    CreationDateDirective,
    DurationPipe,
    OrderByPipe,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

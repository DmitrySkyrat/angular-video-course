import { Component, OnInit } from '@angular/core';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { ICourse } from '../models/course-item.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [SearchFilterPipe],
})
export class CoursesPageComponent implements OnInit {
  constructor(
    private searchFilterPipe: SearchFilterPipe,
    private coursesService: CoursesService
  ) {}
  public courses: ICourse[];
  public searchText = '';
  public ngOnInit(): void {
    this.courses = this.coursesService.getList();
  }
  public onFind(): void {
    this.courses = this.searchFilterPipe.transform(
      this.courses,
      this.searchText,
      this.coursesService.defaultCourseArray
    );
    console.log('onFind', this.courses);
  }
  public onDelete(id: number): void {
    this.courses = this.coursesService.removeItem(id);
  }
}

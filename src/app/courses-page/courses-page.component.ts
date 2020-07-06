import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course-item.model';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [SearchFilterPipe],
})
export class CoursesPageComponent implements OnInit {
  constructor(private searchFilterPipe: SearchFilterPipe) {}
  public courses: Course[] = [
    {
      id: 1,
      title: 'JS core',
      creationDate: '2021-06-05',
      durationMin: 80,
      topRated: true,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quod pariatur deleniti illum saepe voluptates at, quo aperiam, doloribus tempore optio laboriosam, ipsum eum aspernatur voluptatibus dicta unde cum. Excepturi perferendis reiciendis fugiat laudantium doloribus magni rerum, rem fugit quam ab tempore quae neque repudiandae aut natus ipsam assumenda hic minima nisi atque possimus praesentium repellat quisquam? Minima, iure.',
    },
    {
      id: 2,
      title: 'Java core',
      creationDate: '2022-07-06',
      durationMin: 61,
      topRated: false,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quod pariatur deleniti illum saepe voluptates at, quo aperiam, doloribus tempore optio laboriosam, ipsum eum aspernatur voluptatibus dicta unde cum. Excepturi perferendis reiciendis fugiat laudantium doloribus magni rerum, rem fugit quam ab tempore quae neque repudiandae aut natus ipsam assumenda hic minima nisi atque possimus praesentium repellat quisquam? Minima, iure.',
    },
    {
      id: 3,
      title: 'Swift core',
      creationDate: '2018-01-07',
      durationMin: 1,
      topRated: true,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quod pariatur deleniti illum saepe voluptates at, quo aperiam, doloribus tempore optio laboriosam, ipsum eum aspernatur voluptatibus dicta unde cum. Excepturi perferendis reiciendis fugiat laudantium doloribus magni rerum, rem fugit quam ab tempore quae neque repudiandae aut natus ipsam assumenda hic minima nisi atque possimus praesentium repellat quisquam? Minima, iure.',
    },
  ];
  public defaultCourseArray: Course[] = this.courses;
  public searchText = '';
  public ngOnInit(): void {
    console.log('Hello World');
  }
  public onFind(): void {
    this.courses = this.searchFilterPipe.transform(
      this.courses,
      this.searchText,
      this.defaultCourseArray
    );
    console.log(this.courses);
  }
  public deleteCourseById(id: number): void {
    this.courses = this.courses.filter((course: Course) => course.id !== id);
  }
}

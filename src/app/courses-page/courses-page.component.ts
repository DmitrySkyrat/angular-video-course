import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course-item.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  constructor() {}
  courses: Course[] = [
    {
      id: 1,
      title: 'JS core',
      creationDate: '05-06-2020',
      durationMin: 40,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quod pariatur deleniti illum saepe voluptates at, quo aperiam, doloribus tempore optio laboriosam, ipsum eum aspernatur voluptatibus dicta unde cum. Excepturi perferendis reiciendis fugiat laudantium doloribus magni rerum, rem fugit quam ab tempore quae neque repudiandae aut natus ipsam assumenda hic minima nisi atque possimus praesentium repellat quisquam? Minima, iure.',
    },
    {
      id: 2,
      title: 'Java core',
      creationDate: '06-02-2019',
      durationMin: 50,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quod pariatur deleniti illum saepe voluptates at, quo aperiam, doloribus tempore optio laboriosam, ipsum eum aspernatur voluptatibus dicta unde cum. Excepturi perferendis reiciendis fugiat laudantium doloribus magni rerum, rem fugit quam ab tempore quae neque repudiandae aut natus ipsam assumenda hic minima nisi atque possimus praesentium repellat quisquam? Minima, iure.',
    },
    {
      id: 3,
      title: 'Swift core',
      creationDate: '05-01-2018',
      durationMin: 30,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae quod pariatur deleniti illum saepe voluptates at, quo aperiam, doloribus tempore optio laboriosam, ipsum eum aspernatur voluptatibus dicta unde cum. Excepturi perferendis reiciendis fugiat laudantium doloribus magni rerum, rem fugit quam ab tempore quae neque repudiandae aut natus ipsam assumenda hic minima nisi atque possimus praesentium repellat quisquam? Minima, iure.',
    },
  ];
  searchText = '';
  ngOnInit(): void {
    console.log('Hello World');
  }
  onFind(): void {
    console.log(this.searchText);
  }
  deleteCourseById(id: number): void {
    this.courses = this.courses.filter((course: Course) => course.id !== id);
  }
}

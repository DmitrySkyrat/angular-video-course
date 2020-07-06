import { Injectable } from '@angular/core';
import { ICourse } from '../models/course-item.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}
  public courses: ICourse[] = [
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
  public defaultCourseArray: ICourse[] = this.courses;
  public getList(): ICourse[] {
    return this.courses;
  }
  public createCourse(): ICourse {
    return;
  }
  public getItemById(id: number): ICourse {
    return this.courses.find((course: ICourse): boolean => course.id === id);
  }
  public updateItem(): ICourse {
    return;
  }
  public removeItem(id: number): ICourse[] {
    if (window.confirm('Do you really want to delete this course?')) {
      this.courses = this.courses.filter(
        (course: ICourse): boolean => course.id !== id
      );
      return this.courses;
    }
  }
}

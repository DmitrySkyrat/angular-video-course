import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/course-item.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteById: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
  deleteCourse(id: number): void {
    this.deleteById.emit(id);
  }
}

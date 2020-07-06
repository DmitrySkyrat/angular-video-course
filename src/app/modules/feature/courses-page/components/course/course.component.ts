import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../../models/course-item.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
  @Input() public course: ICourse;
  @Output() public deleteById: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor() {}

  public ngOnInit(): void {}
  public deleteCourse(id: number): void {
    this.deleteById.emit(id);
  }
}

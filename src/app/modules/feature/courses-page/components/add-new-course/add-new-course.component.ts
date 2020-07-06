import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss'],
})
export class AddNewCourseComponent implements OnInit {
  constructor() {}
  public title: string;
  public description: string;
  public creationDate: string;
  public durationMin: number;
  public authors: string;
  public ngOnInit(): void {}
}

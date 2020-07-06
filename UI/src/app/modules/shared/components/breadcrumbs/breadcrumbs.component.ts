import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/modules/courses-page/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  constructor(public coursesService: CoursesService) {}
  public ngOnInit(): void {}
}

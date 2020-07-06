import { Component, OnInit } from '@angular/core';
import { ICourse } from '../models/course.model';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter,
  tap,
  finalize,
} from 'rxjs/internal/operators';
import { LoadingService } from '../../shared/services/loading.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [],
})
export class CoursesPageComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private route: Router,
    public loadingService: LoadingService
  ) {}
  public courses: ICourse[] = [];
  public searchControl = new FormControl('');
  public minSearchTextLength = 3;
  public interval = 2000;
  // variables for scroll
  public startIndex = 0;
  public count = 3;
  public throttle = 1000;
  public scrollDistance = 1;
  public ngOnInit(): void {
    this.addItems(this.startIndex, 'push');
    this.getInnerList();
  }
  public getInnerList(): void {
    this.searchControl.valueChanges
      .pipe(
        filter(
          (searchText: string): boolean =>
            searchText.length >= this.minSearchTextLength
        ),
        debounceTime(this.interval),
        distinctUntilChanged(),
        tap((): void => {
          this.loadingService.changeLoadingStatus();
        }),
        switchMap(
          (searchText: string): Observable<ICourse[]> =>
            this.coursesService
              .getList(this.startIndex, this.count, searchText)
              .pipe(
                finalize((): void => {
                  this.loadingService.changeLoadingStatus();
                })
              )
        )
      )
      .subscribe((data: ICourse[]): void => {
        this.courses = data;
      });
  }
  public onDelete(id: number): void {
    this.coursesService.removeItem(id).subscribe((): void => {});
    this.startIndex = 0;
    this.getInnerList();
  }
  public addNewCourse(): void {
    this.route.navigate(['/courses/new']);
  }
  public onScrollDown(): void {
    this.startIndex += this.count;
    this.addItems(this.startIndex, 'push');
  }
  public addItems(startIndex: number, _method: string): void {
    setTimeout((): void => {
      this.loadingService.changeLoadingStatus();
    });
    this.coursesService
      .getList(startIndex, this.count, this.searchControl.value)
      .pipe(
        finalize((): void => {
          this.loadingService.changeLoadingStatus();
        })
      )
      .subscribe((newData: ICourse[]): void => {
        this.courses[_method](...newData);
      });
  }
}

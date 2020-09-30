import { Component, OnInit } from '@angular/core';
import { ICourse } from '../models/course.model';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  switchMap,
} from 'rxjs/internal/operators';
import { LoadingService } from '../../shared/services/loading.service';
import { FormControl } from '@angular/forms';
import { GetUser } from 'src/app/root-store/auth-store/actions/auth.actions';
import { Store, select } from '@ngrx/store';
import {
  GetCourses,
  DeleteCourse,
} from 'src/app/root-store/courses-store/actions/courses.actions';
import { getCourses } from 'src/app/root-store/courses-store/selectors/courses.selectors';
import { IAppState } from 'src/app/root-store/app.state';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [],
})
export class CoursesPageComponent implements OnInit {
  constructor(
    private route: Router,
    public loadingService: LoadingService,
    public coursesService: CoursesService,
    public _store: Store<IAppState>
  ) {}
  public courses: ICourse[] = [];
  public courses$: Observable<ICourse[]>;
  public subscription: Subscription;
  public searchControl = new FormControl('');
  public minSearchTextLength = 3;
  public interval = 2000;
  // variables for scroll
  public startIndex = 0;
  public count = 3;
  public throttle = 1000;
  public scrollDistance = 1;

  public ngOnInit(): void {
    this._store.dispatch(
      new GetUser({
        token: localStorage.getItem('access_token'),
      })
    );

    this.courses$ = this._store.pipe(select(getCourses));
    this.courses$.subscribe((courses: ICourse[]): void => {
      this.courses = courses;
    });
    this.getSearchedCourses();

    if (!this.courses.length) {
      this.loadMore(this.startIndex);
    }
  }

  public getSearchedCourses(): void {
    this.searchControl.valueChanges
      .pipe(
        filter(
          (searchText: string): boolean =>
            searchText.length >= this.minSearchTextLength
        ),
        debounceTime(this.interval),
        distinctUntilChanged(),
        switchMap(
          (searchText: string): Observable<ICourse[]> => {
            this.loadingService.changeLoadingStatus();
            this._store.dispatch(
              new GetCourses({
                start: this.startIndex,
                count: this.count,
                textFragment: searchText,
              })
            );
            this.loadingService.changeLoadingStatus();
            return this.courses$.pipe(
              finalize((): void => {
                this.loadingService.changeLoadingStatus();
              })
            );
          }
        )
      )
      .subscribe((courses: ICourse[]): void => {
        console.log('Store courses', this.courses$);
      });
  }

  public onDelete(id: number): void {
    this._store.dispatch(new DeleteCourse(id));
  }
  public addNewCourse(): void {
    this.route.navigate(['/courses/new']);
  }
  public onScrollDown(): void {
    this.startIndex += this.count;
    this.loadMore(this.startIndex);
  }
  public loadMore(startIndex: number): void {
    setTimeout((): void => {
      this.loadingService.changeLoadingStatus();
    });
    this._store.dispatch(
      new GetCourses({
        start: startIndex,
        count: this.count,
        textFragment: this.searchControl.value,
      })
    );
    setTimeout((): void => {
      this.loadingService.changeLoadingStatus();
    });
  }
}

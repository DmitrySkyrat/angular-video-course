import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';
import {
  CoursesActionsTypes,
  GetCoursesSuccess,
  GetCoursesFailure,
  GetCourses,
  GetScrolledCoursesFailure,
  GetScrolledCoursesSuccess,
  GetScrolledCourses,
  DeleteCourseSuccess,
  DeleteCourseFailure,
  DeleteCourse,
  CreateCourseSuccess,
  CreateCourseFailure,
  CreateCourse,
  UpdateCourseSuccess,
  UpdateCourse,
  UpdateCourseFailure,
} from '../actions/courses.actions';
import {
  ICoursesRequest,
  ICourse,
  ICreateCourseRequest, ICourseUpdateRequest
} from 'src/app/modules/courses-page/models/course.model';
import { CoursesService } from 'src/app/modules/courses-page/services/courses.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../app.state';
@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    public coursesService: CoursesService,
    public _store: Store<IAppState>
  ) {}

  @Effect()
  GetCourses: Observable<
    GetCoursesSuccess | GetCoursesFailure
  > = this.actions$.pipe(
    ofType(CoursesActionsTypes.GET_COURSES),
    map((action: GetCourses): ICoursesRequest => action.payload),
    switchMap(
      (
        payload: ICoursesRequest
      ): Observable<GetCoursesSuccess | GetCoursesFailure> => {
        return this.coursesService
          .getList(payload.start, payload.count, payload.textFragment)
          .pipe(
            map(
              (courses: ICourse[]): GetCoursesSuccess => {
                console.log('GetCourses', courses);
                return new GetCoursesSuccess(courses);
              }
            ),
            catchError(
              (error: string): Observable<GetCoursesFailure> => {
                return of(new GetCoursesFailure(error));
              }
            )
          );
      }
    )
  );

  @Effect({ dispatch: false })
  GetCoursesSuccess: Observable<GetCoursesSuccess> = this.actions$.pipe(
    ofType(CoursesActionsTypes.GET_COURSES_SUCCESS)
  );

  @Effect({ dispatch: false })
  GetCoursesFailure: Observable<GetCoursesSuccess> = this.actions$.pipe(
    ofType(CoursesActionsTypes.GET_COURSES_FAILURE)
  );

  @Effect()
  GetScrolledCourses: Observable<
    GetScrolledCoursesSuccess | GetScrolledCoursesFailure
  > = this.actions$.pipe(
    ofType(CoursesActionsTypes.GET_SCROLLED_COURSES),
    map((action: GetScrolledCourses): ICoursesRequest => action.payload),
    switchMap(
      (
        payload: ICoursesRequest
      ): Observable<GetScrolledCoursesSuccess | GetScrolledCoursesFailure> => {
        return this.coursesService
          .getList(payload.start, payload.count, payload.textFragment)
          .pipe(
            map(
              (courses: ICourse[]): GetScrolledCoursesSuccess => {
                console.log(courses);
                return new GetScrolledCoursesSuccess(courses);
              }
            ),
            catchError(
              (error: string): Observable<GetScrolledCoursesFailure> => {
                return of(new GetScrolledCoursesFailure(error));
              }
            )
          );
      }
    )
  );

  @Effect()
  DeleteCourse: Observable<
    DeleteCourseSuccess | DeleteCourseFailure
  > = this.actions$.pipe(
    ofType(CoursesActionsTypes.DELETE_COURSE),
    map((action: DeleteCourse): number => action.payload),
    switchMap(
      (
        payload: number
      ): Observable<DeleteCourseSuccess | DeleteCourseFailure> => {
        return this.coursesService.removeItem(payload).pipe(
          map(
            (): DeleteCourseSuccess => {
              return new DeleteCourseSuccess(payload);
            }
          )
        );
      }
    )
  );

  @Effect()
  CreateCourse: Observable<
    CreateCourseSuccess | CreateCourseFailure
  > = this.actions$.pipe(
    ofType(CoursesActionsTypes.CREATE_COURSE),
    map((action: CreateCourse): ICreateCourseRequest => action.payload),
    switchMap(
      (
        payload: ICreateCourseRequest
      ): Observable<CreateCourseSuccess | CreateCourseFailure> => {
        return this.coursesService
          .createCourse(
            payload.name,
            payload.description,
            payload.date,
            payload.length,
            payload.authors,
            payload.isTopRated
          )
          .pipe(
            map(
              (course: ICourse): CreateCourseSuccess => {
                return new CreateCourseSuccess(course);
              }
            ),
            catchError(
              (error: string): Observable<CreateCourseFailure> => {
                return of(new CreateCourseFailure(error));
              }
            )
          );
      }
    )
  );

  @Effect()
  UpdateCourse: Observable<
    UpdateCourseSuccess | UpdateCourseFailure
  > = this.actions$.pipe(
    ofType(CoursesActionsTypes.UPDATE_COURSE),
    map((action: UpdateCourse): ICourseUpdateRequest => action.payload),
    switchMap((payload: ICourseUpdateRequest): Observable<ICourse> => {
      return this.coursesService.updateCourse(
        payload.id,
        payload.name,
        payload.description,
        payload.date,
        payload.length,
        payload.authors,
        payload.isTopRated
      );
    }),
    map(
      (course: ICourse): UpdateCourseSuccess => {
        // let currentCourses: ICourse[] = [];
        // this._store.pipe(select(getCourses)).pipe(
        //   map((courses: ICourse[]): void => {
        //     currentCourses = courses.filter(
        //       (filteredCourse: ICourse): boolean =>
        //         filteredCourse.id !== course.id
        //     );
        //   })
        // );
        return new UpdateCourseSuccess(course);
      }
    ),
    catchError(
      (error: string): Observable<UpdateCourseFailure> => {
        return of(new UpdateCourseFailure(error));
      }
    )
  );
}

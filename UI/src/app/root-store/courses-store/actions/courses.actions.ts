import { Action } from '@ngrx/store';
import {
  ICourse,
  ICoursesRequest,
  ICourseUpdateRequest,
  ICreateCourseRequest,
} from 'src/app/modules/courses-page/models/course.model';
export enum CoursesActionsTypes {
  GET_COURSES = '[Courses] Get Courses',
  GET_COURSES_SUCCESS = '[Courses] Get courses Success',
  GET_COURSES_FAILURE = '[Courses] Get courses Failure',
  GET_SCROLLED_COURSES = '[Courses] Get scrolled courses',
  GET_SCROLLED_COURSES_SUCCESS = '[Courses] Get scrolled courses Success',
  GET_SCROLLED_COURSES_FAILURE = '[Courses] Get scrolled courses Failure',
  GET_COURSE_BY_ID = '[Courses] Get course by id',
  GET_COURSE_BY_ID_SUCCESS = '[Courses] Get course Success',
  GET_COURSE_BY_ID_FAILURE = '[Courses] Get course Failure',
  DELETE_COURSE = '[Courses] Delete course',
  DELETE_COURSE_SUCCESS = '[Courses] Delete course Success',
  DELETE_COURSE_FAILURE = '[Courses] Delete course Failure',
  UPDATE_COURSE = '[Courses] Update course',
  UPDATE_COURSE_SUCCESS = '[Courses] Update course Success',
  UPDATE_COURSE_FAILURE = '[Courses] Update course Failure',
  CREATE_COURSE = '[Courses] Create course',
  CREATE_COURSE_SUCCESS = '[Courses] Create course Success',
  CREATE_COURSE_FAILURE = '[Courses] Create course Failure',
}
export class GetCourses implements Action {
  readonly type = CoursesActionsTypes.GET_COURSES;
  constructor(public payload: ICoursesRequest) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetCoursesSuccess implements Action {
  readonly type = CoursesActionsTypes.GET_COURSES_SUCCESS;
  constructor(public payload: ICourse[]) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetCoursesFailure implements Action {
  readonly type = CoursesActionsTypes.GET_COURSES_FAILURE;
  constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetScrolledCourses implements Action {
  readonly type = CoursesActionsTypes.GET_SCROLLED_COURSES;
  constructor(public payload: ICoursesRequest) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetScrolledCoursesSuccess implements Action {
  readonly type = CoursesActionsTypes.GET_SCROLLED_COURSES_SUCCESS;
  constructor(public payload: ICourse[]) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetScrolledCoursesFailure implements Action {
  readonly type = CoursesActionsTypes.GET_SCROLLED_COURSES_FAILURE;
  constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetCourseById implements Action {
  readonly type = CoursesActionsTypes.GET_COURSE_BY_ID;
  constructor(public payload: number) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetCourseByIdSuccess implements Action {
  readonly type = CoursesActionsTypes.GET_COURSE_BY_ID_SUCCESS;
  constructor(public payload: ICourse) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetCourseByIdFailure implements Action {
  readonly type = CoursesActionsTypes.GET_COURSE_BY_ID_FAILURE;
  constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class DeleteCourse implements Action {
  readonly type = CoursesActionsTypes.DELETE_COURSE;
  constructor(public payload: number) {}
}
// tslint:disable-next-line: max-classes-per-file
export class DeleteCourseSuccess implements Action {
  readonly type = CoursesActionsTypes.DELETE_COURSE_SUCCESS;
  constructor(public payload: number) {}
}
// tslint:disable-next-line: max-classes-per-file
export class DeleteCourseFailure implements Action {
  readonly type = CoursesActionsTypes.DELETE_COURSE_FAILURE;
  constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class UpdateCourse implements Action {
  readonly type = CoursesActionsTypes.UPDATE_COURSE;
  constructor(public payload: ICourseUpdateRequest) {}
}
// tslint:disable-next-line: max-classes-per-file
export class UpdateCourseSuccess implements Action {
  readonly type = CoursesActionsTypes.UPDATE_COURSE_SUCCESS;
  constructor(public payload: ICourse) {}
}
// tslint:disable-next-line: max-classes-per-file
export class UpdateCourseFailure implements Action {
  readonly type = CoursesActionsTypes.UPDATE_COURSE_FAILURE;
  constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class CreateCourse implements Action {
  readonly type = CoursesActionsTypes.CREATE_COURSE;
  constructor(public payload: ICreateCourseRequest) {}
}
// tslint:disable-next-line: max-classes-per-file
export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionsTypes.CREATE_COURSE_SUCCESS;
  constructor(public payload: ICourse) {}
}
// tslint:disable-next-line: max-classes-per-file
export class CreateCourseFailure implements Action {
  readonly type = CoursesActionsTypes.CREATE_COURSE_FAILURE;
  constructor(public payload: string) {}
}
export type CoursesActions =
  | GetCourses
  | GetCoursesSuccess
  | GetCoursesFailure
  | GetCourseById
  | GetCourseByIdSuccess
  | GetCourseByIdFailure
  | GetScrolledCourses
  | GetScrolledCoursesSuccess
  | GetScrolledCoursesFailure
  | DeleteCourse
  | DeleteCourseSuccess
  | DeleteCourseFailure
  | UpdateCourse
  | UpdateCourseSuccess
  | UpdateCourseFailure
  | CreateCourse
  | CreateCourseSuccess
  | CreateCourseFailure;

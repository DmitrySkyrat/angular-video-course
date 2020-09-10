import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ICoursesState } from '../state/courses.state';
import { ICourse } from 'src/app/modules/courses-page/models/course.model';
import { IAppState } from '../../app.state';
const selectCourses = (state: IAppState): ICoursesState => state.coursesData;
export const getCourses = createSelector(
  selectCourses,
  (state: ICoursesState): ICourse[] => state.courses
);

import { Action } from '@ngrx/store';
import { ICoursesState, initialCoursesState } from '../state/courses.state';
import {
  CoursesActions,
  CoursesActionsTypes,
} from '../actions/courses.actions';
import { ICourse } from 'src/app/modules/courses-page/models/course.model';
import { act } from '@ngrx/effects';

export const coursesReducer = (
  state: ICoursesState = initialCoursesState,
  action: CoursesActions
): ICoursesState => {
  switch (action.type) {
    case CoursesActionsTypes.GET_COURSES_SUCCESS: {
      return {
        ...state,
        courses: action.payload,
      };
    }
    case CoursesActionsTypes.GET_COURSES_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case CoursesActionsTypes.GET_SCROLLED_COURSES_SUCCESS: {
      return {
        ...state,
        courses: [...state.courses, ...action.payload],
      };
    }
    case CoursesActionsTypes.DELETE_COURSE_SUCCESS: {
      return {
        ...state,
        courses: state.courses.filter(
          (course: ICourse): boolean => course.id !== action.payload
        ),
      };
    }
    case CoursesActionsTypes.DELETE_COURSE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case CoursesActionsTypes.UPDATE_COURSE_SUCCESS: {
      return {
        ...state,
        courses: state.courses.map(
          (course: ICourse): ICourse => {
            if (course.id !== action.payload.id) {
              return course;
            }
            return action.payload;
          }
        ),
      };
    }
    case CoursesActionsTypes.UPDATE_COURSE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case CoursesActionsTypes.CREATE_COURSE_SUCCESS: {
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    }
    case CoursesActionsTypes.CREATE_COURSE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

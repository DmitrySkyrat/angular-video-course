import { IAuthState, initialAuthState } from './auth-store/state/auth.state';
import {
  ICoursesState,
  initialCoursesState,
} from './courses-store/state/courses.state';

export interface IAppState {
  authData: IAuthState;
  coursesData: ICoursesState;
}

export const initialAppState: IAppState = {
  authData: initialAuthState,
  coursesData: initialCoursesState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}

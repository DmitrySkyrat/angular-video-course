import { IAppState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import { coursesReducer } from './courses-store/reducers/courses.reducer';
import { authReducer } from './auth-store/reducers/auth.reducer';

// tslint:disable-next-line: no-any
export const appReducers: ActionReducerMap<IAppState, any> = {
  authData: authReducer,
  coursesData: coursesReducer,
};

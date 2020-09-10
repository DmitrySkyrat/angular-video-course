import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAuthState } from '../state/auth.state';
import { IUser } from 'src/app/modules/login/models/user.model';
import { IAppState } from '../../app.state';
const selectUser = (state: IAppState): IAuthState => state.authData;
export const getUser = createSelector(
  selectUser,
  (state: IAuthState): IUser => state.user
);

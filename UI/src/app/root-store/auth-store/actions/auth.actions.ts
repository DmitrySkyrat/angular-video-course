import { Action } from '@ngrx/store';
import { IUser, IToken, ILoginRequest } from 'src/app/modules/login/models/user.model';
export enum AuthActionsTypes {
  LOGIN = '[Auth] Login',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGOUT = '[Auth] Logout',
  GET_USER = '[Auth] Get User',
  GET_USER_SUCCESS = '[Auth] Get User Success',
  GET_USER_FAILURE = '[Auth] Get User Failure',
}

export class LogIn implements Action {
  readonly type = AuthActionsTypes.LOGIN;
  constructor(public payload: ILoginRequest) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoginSuccess implements Action {
  readonly type = AuthActionsTypes.LOGIN_SUCCESS;
  constructor(public payload: IToken) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LoginFailure implements Action {
  readonly type = AuthActionsTypes.LOGIN_FAILURE;
  constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class LogOut implements Action {
  readonly type = AuthActionsTypes.LOGOUT;
}
// tslint:disable-next-line: max-classes-per-file
export class GetUser implements Action {
  readonly type = AuthActionsTypes.GET_USER;
  constructor(public payload: IToken) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetUserSuccess implements Action {
  readonly type = AuthActionsTypes.GET_USER_SUCCESS;
  constructor(public payload: IUser) {}
}
// tslint:disable-next-line: max-classes-per-file
export class GetUserFailure implements Action {
  readonly type = AuthActionsTypes.GET_USER_FAILURE;
  constructor(public payload: string) {}
}
export type AuthActions =
  | LogIn
  | LoginSuccess
  | LoginFailure
  | LogOut
  | GetUser
  | GetUserSuccess
  | GetUserFailure;

import { IUser, IToken } from 'src/app/modules/login/models/user.model';

export interface IAuthState {
  // is a user authenticated?
  isAuthenticated: boolean;
  token: IToken;
  user: IUser;
  // error message
  errorMessage: string | null;
}

export const initialAuthState: IAuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  errorMessage: null,
};

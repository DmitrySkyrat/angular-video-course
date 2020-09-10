import { IAuthState, initialAuthState } from '../state/auth.state';
import { AuthActionsTypes, AuthActions } from '../actions/auth.actions';

export const authReducer = (
  state: IAuthState = initialAuthState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case AuthActionsTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        errorMessage: null,
      };
    }
    case AuthActionsTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.',
      };
    }
    case AuthActionsTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case AuthActionsTypes.GET_USER_FAILURE: {
      return {
        ...state,
        errorMessage: 'Something went wrong',
      };
    }
    case AuthActionsTypes.LOGOUT: {
      return initialAuthState;
    }
    default:
      return state;
  }
}

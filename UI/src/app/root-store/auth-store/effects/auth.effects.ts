import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { Observable, of } from 'rxjs';
import {
  AuthActionsTypes,
  LogIn,
  LoginSuccess,
  LoginFailure,
  GetUser,
  GetUserSuccess,
  GetUserFailure,
  LogOut,
} from '../actions/auth.actions';
import { map, switchMap, catchError, tap } from 'rxjs/internal/operators';
import {
  ILoginRequest,
  IUser,
  IToken,
} from 'src/app/modules/login/models/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  Login: Observable<LoginSuccess | LoginFailure> = this.actions$.pipe(
    ofType(AuthActionsTypes.LOGIN),
    map((action: LogIn): ILoginRequest => action.payload),
    switchMap(
      (payload: ILoginRequest): Observable<LoginSuccess | LoginFailure> => {
        return this.authService.login(payload.login, payload.password).pipe(
          map(
            (token: IToken): LoginSuccess => {
              console.log('Effect Token', token);
              return new LoginSuccess(token);
            }
          ),
          catchError(
            (error: string): Observable<LoginFailure> => {
              console.log('Effect Token Error', error);
              return of(new LoginFailure(error));
            }
          )
        );
      }
    )
  );

  @Effect({ dispatch: false })
  LoginSuccess: Observable<LoginSuccess> = this.actions$.pipe(
    ofType(AuthActionsTypes.LOGIN_SUCCESS),
    tap((token: LoginSuccess): void => {
      localStorage.setItem('access_token', token.payload.token);
      this.router.navigate(['/courses']);
    })
  );

  @Effect({ dispatch: false })
  LoginFailure: Observable<LoginFailure> = this.actions$.pipe(
    ofType(AuthActionsTypes.LOGIN_FAILURE),
    tap((errorMessage: LoginFailure): void => {
      console.log(errorMessage);
    })
  );

  @Effect({ dispatch: false })
  LogOut: Observable<LogOut> = this.actions$.pipe(
    ofType(AuthActionsTypes.LOGOUT),
    tap((user: LogOut): void => {
      this.authService.logout();
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    })
  );

  @Effect()
  GetUser: Observable<GetUserSuccess | GetUserFailure> = this.actions$.pipe(
    ofType(AuthActionsTypes.GET_USER),
    map((action: GetUser): IToken => action.payload),
    switchMap(
      (payload: IToken): Observable<GetUserSuccess | GetUserFailure> => {
        return this.authService.getUserInfo(payload).pipe(
          map(
            (user: IUser): GetUserSuccess => {
              // console.log('Effect User', user);
              return new GetUserSuccess(user);
            }
          ),
          catchError(
            (error: string): Observable<GetUserFailure> => {
              // console.log('Effect User Error', error);
              return of(new GetUserFailure(error));
            }
          )
        );
      }
    )
  );

  @Effect({ dispatch: false })
  GetUserSuccess: Observable<GetUserSuccess> = this.actions$.pipe(
    ofType(AuthActionsTypes.GET_USER_SUCCESS)
  );
}

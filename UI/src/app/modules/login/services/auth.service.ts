import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IToken } from '../models/user.model';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';
import { finalize, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fakeToken: IToken;
  public user$: Subject<IUser> = new Subject<IUser>();
  public isLogged$: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('access_token')
  );
  constructor(
    private http: HttpClient,
    public loadingService: LoadingService
  ) {}

  public login(login: string, password: string): Observable<IToken> {
    this.loadingService.changeLoadingStatus();
    return this.http
      .post<IToken>('http://localhost:3004/auth/login', {
        login: login,
        password: password,
      })
      .pipe(
        finalize((): void => {
          this.loadingService.changeLoadingStatus();
        }),
        tap((fakeToken: IToken): void => {
          this.fakeToken = fakeToken;
          this.isLogged$.next(localStorage.getItem('access_token'));
        })
      );
  }
  public logout(): void {
    this.fakeToken = null;
  }
  public isAuthenticated(): boolean {
    this.isLogged$.next(localStorage.getItem('access_token'));
    return !!localStorage.getItem('access_token');
  }
  public getUserInfo(token: IToken): Observable<IUser> {
    setTimeout((): void => {
      this.loadingService.changeLoadingStatus();
    });
    return this.http
      .post<IUser>('http://localhost:3004/auth/userinfo', {
        token: token.token,
      })
      .pipe(
        tap((user: IUser): void => {
          this.user$.next(user);
        }),
        finalize((): void => {
          this.loadingService.changeLoadingStatus();
        })
      );
  }
}

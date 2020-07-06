import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IToken } from '../models/user.model';
import { Subject, Observable } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';
import { finalize } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fakeToken: IToken;

  public stream$: Subject<boolean> = new Subject<boolean>();
  public counter = 0;
  public user: IUser;
  public user$: Subject<IUser> = new Subject<IUser>();

  constructor(private http: HttpClient, public loadingService: LoadingService) {
    this.fakeToken = { token: localStorage.token };
  }

  public login(login: string, password: string): IUser {
    this.loadingService.changeLoadingStatus();
    this.http
      .post<IToken>('http://localhost:3004/auth/login', {
        login: login,
        password: password,
      })
      .pipe(
        finalize((): void => {
          this.loadingService.changeLoadingStatus();
          console.log(this.loadingService.isLoading);
        })
      )
      .subscribe((fakeToken: IToken): void => {
        this.fakeToken = fakeToken;
        localStorage.token = fakeToken.token;
        const id: number = this.counter++;
        const newUser: IUser = {
          id,
          token: fakeToken,
          login,
          password,
        };
        this.user = newUser;
        this.user$.next(this.user);
        console.log(fakeToken);
      });
    return this.user;
  }
  public logout(): void {
    this.fakeToken = null;
    this.stream$.next(false);
  }
  public isAuthenticated(): boolean {
    this.stream$.next(!!this.fakeToken);
    return !!this.fakeToken;
  }
  public getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3004/auth/userinfo', {
      token: this.fakeToken,
    });
  }
}

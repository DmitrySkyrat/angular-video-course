import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/modules/login/models/user.model';
import { map } from 'rxjs/internal/operators';
import { LogOut } from 'src/app/root-store/auth-store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/root-store/auth-store/state/auth.state';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public _store: Store<IAuthState>,
    public translate: TranslateService
  ) {}
  public authStatus = 'Log in';
  public user$: Observable<string>;
  public ngOnInit(): void {
    this.authService.isLogged$.subscribe((value: string): void => {
      if (value) {
        this.authStatus = 'Log off';
      }
    });
    this.user$ = this.authService.user$.pipe(
      map((user: IUser): string => user.login)
    );
  }
  public LogOut(): void {
    this.authStatus = 'Log in';
    this._store.dispatch(new LogOut());
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LogIn } from 'src/app/root-store/auth-store/actions/auth.actions';
import { IAppState } from 'src/app/root-store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _store: Store<IAppState>) {}
  public loginControl = new FormControl('');
  public passwordControl = new FormControl('');
  public ngOnInit(): void {}
  public logIn(): void {
    this._store.dispatch(
      new LogIn({
        login: this.loginControl.value,
        password: this.passwordControl.value,
      })
    );
  }
}

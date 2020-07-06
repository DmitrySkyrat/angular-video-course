import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/modules/login/models/user.model';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  public loginControl = new FormControl('');
  public passwordControl = new FormControl('');
  public user: IUser;
  public ngOnInit(): void {}
  public logIn(): void {
    this.user = this.authService.login(
      this.loginControl.value,
      this.passwordControl.value
    );
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/courses']);
    }
  }
}

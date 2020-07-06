import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/modules/feature/login/models/user.model';
import { AuthService } from 'src/app/modules/feature/login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  public email = '';
  public password = '';
  public users: IUser[];
  public ngOnInit(): void {}
  public login(): void {
    this.users = this.authService.login(this.email, this.password);
    this.router.navigate(['/courses']);
  }
}

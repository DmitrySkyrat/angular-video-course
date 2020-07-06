import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/modules/login/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, public authService: AuthService) {}
  public authStatus = 'Log in';
  public user: IUser;
  public ngOnInit(): void {
    this.authService.stream$.subscribe((value: boolean): void => {
      if (value) {
        this.authStatus = 'Log off';
      }
    });
    this.authService.user$.subscribe((currentUser: IUser): void => {
      this.user = currentUser;
    });
  }
  public checkAuthStatus(): void {
    this.authStatus = 'Log in';
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

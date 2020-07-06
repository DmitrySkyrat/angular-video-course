import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'angular-video-course';
  public isAuth = true;

  public checkAuth(newAuthStatus: boolean): void {
    this.isAuth = newAuthStatus;
  }
}

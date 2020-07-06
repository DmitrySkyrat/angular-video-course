import { Component } from '@angular/core';
import { AuthService } from './modules/login/services/auth.service';
import { LoadingService } from './modules/shared/services/loading.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    public loadingService: LoadingService
  ) {}
  public title = 'angular-video-course';
}

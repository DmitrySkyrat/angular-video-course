import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() public newAuth: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private router: Router) {}
  public isAuth = true;
  public authStatus = 'Log off';

  public ngOnInit(): void {}
  public changeAuthStatus(): void {
    this.isAuth = !this.isAuth;
    if (this.isAuth) {
      this.authStatus = 'Log off';
      this.router.navigate(['/courses']);
    } else {
      this.authStatus = 'Log in';
      this.router.navigate(['/login']);
    }
    this.newAuth.emit(this.isAuth);
  }
}

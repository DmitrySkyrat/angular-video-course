import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}
  public isLoading = false;
  public isLoading$: Subject<boolean> = new Subject<boolean>();
  public changeLoadingStatus(): void {
    this.isLoading = !this.isLoading;
    this.isLoading$.next(this.isLoading);
    console.log('changeLoadingStatus');
  }
}

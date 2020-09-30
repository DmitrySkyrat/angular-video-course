import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    console.log('interceptor', req);
    return next.handle(
      req.clone({
        url: ``,
        setHeaders: {
          Authorization: 'successfully',
        },
        // setParams: {
        //   key: '58ebfdf7ec92657b493b24da',
        // },
      })
    );
  }
}

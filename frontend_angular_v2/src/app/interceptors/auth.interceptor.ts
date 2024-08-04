import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, from, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Token } from '@angular/compiler';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private afAuth: AngularFireAuth) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return from(this.afAuth.currentUser).pipe(
      switchMap(user => {
        if(user) {
          return from(user.getIdToken()).pipe(
            switchMap(token => {
              const cloned = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
              });
              return next.handle(cloned);
            })
          );
        } else {
          return next.handle(request);
        };
      })
    )
    next.handle(request);
  }
}

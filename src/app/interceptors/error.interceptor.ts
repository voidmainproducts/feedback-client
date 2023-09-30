import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth-service/auth.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err:any) => {
      console.log("err", err);
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.auth.logout();
        location.reload();
      }
      const error = err.message || err.statusText;
      return throwError(error);
    }))
  }
}

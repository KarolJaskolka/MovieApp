import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { TokenService } from './token.service';
import { StorageService } from './storage.service';

import { HttpEvent, HttpInterceptor } from '@angular/common/http';
import { HttpHandler, HttpRequest } from '@angular/common/http'

import { mergeMap, map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/do';

@Injectable()

export class AppInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService, private storageService:StorageService, private router:Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req)
        .pipe(
          catchError(
            error => this.handleError(req, error, next)
          )
        );
    }

  handleError(req: HttpRequest<any>, error, next: HttpHandler): Observable<HttpEvent<any>> {
    if (error.status === 401) {
      const token = this.storageService.getRefreshToken();
      const login = this.storageService.getLogin();
      // errors fixed thanks to reddit community
      return this.tokenService.refreshToken(token, login)
        .pipe(map(
          data => {
            this.storageService.setToken(data.token);
            const cloneReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + data.token)
            });
            return next.handle(cloneReq)
          }, err => {
            this.router.navigate(['/form/login']);
            return next.handle(req);
          }
        ),
        mergeMap(res => res)
      );
    } else {
      if(error.status === 403){
        this.router.navigate(['/form/login']);
        return next.handle(req);
      }
      return next.handle(req);
    }
  }

}
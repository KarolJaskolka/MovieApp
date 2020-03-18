import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from './token.service';
import { StorageService } from './storage.service';

import { HttpEvent, HttpInterceptor } from '@angular/common/http';
import { HttpHandler, HttpRequest } from '@angular/common/http'

import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()

export class AppInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService, private storageService:StorageService, private router:Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
    return next.handle(req)                
        .do(event => { return event; },
            error => this.handleError(req, error, next));
  }

  handleError(req: HttpRequest<any>, error, next: HttpHandler) { 
    if (error.status === 401) {
      const token = this.storageService.getRefreshToken();
      const login = this.storageService.getLogin();
      return this.tokenService.refreshToken(token, login).subscribe(data => {
        this.storageService.setToken(data.token); // it works
        return next.handle(req.clone({ // does nothing why ??? I don't get it :/
          headers: req.headers.set('Authorization', 'Bearer ' + data.token)
        }))
      }, err => {
        this.router.navigate(['/form/login']);
        console.log(err);
      })
    } else {
      console.log(error);
    }
  }
}
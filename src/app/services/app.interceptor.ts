import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from './token.service';
import { StorageService } from './storage.service';

import { HttpEvent, HttpInterceptor } from '@angular/common/http';
import { HttpHandler, HttpRequest } from '@angular/common/http'

import 'rxjs/add/operator/do';

@Injectable()

export class AppInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService, private storageService:StorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
    return next.handle(req)                
        .do(event => { return event; },
            error => this.handleError(req, error, next));
  }

  handleError(req: HttpRequest<any>, error, next: HttpHandler) { 
    if (error.status === 401) {
      const token = this.storageService.getToken();
      this.tokenService.refreshToken(token).subscribe(data => {
        this.storageService.setToken(data.token);
        this.storageService.setRefreshToken(data.refreshToken);
        return next.handle(req); 
      })
    } else {
      console.log(error);
    }
  }

}
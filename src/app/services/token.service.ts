import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Log } from '../models/log';

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    
    host: string = environment.host;

    constructor(private http:HttpClient) {}

    refreshToken(token: string, login: string): Observable<Log> {
        return this.http.post<Log>(this.host + 'api/auth/token', {refreshToken: token, login: login});
    }

}
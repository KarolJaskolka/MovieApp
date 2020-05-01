import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Log } from '../models/log';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    host: string = environment.host;

    constructor(private http:HttpClient) {}

    login(loginInput:string, passInput: string):Observable<Log>{
        return this.http.post<Log>(this.host + 'api/auth/login', { login: loginInput, password: passInput });
    }

    register(user: User):Observable<User>{
        return this.http.post<User>(this.host + 'api/auth/register/', user);
    }

}
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/rating';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    host: string = environment.host;

    constructor(private http:HttpClient, private service:StorageService) {}

    getUser(login: string):Observable<User> {
        return this.http.get<User>(this.host + 'api/users/' + login, {
            headers: new HttpHeaders().set('Authorization',  'Bearer ' + this.service.getToken()),
        });
    }

    getUserComments(login: string, limit: number, offset: number):Observable<Array<Comment>>{
        return this.http.get<Array<Comment>>(this.host + 'api/users/' + login 
                    + '/comments?limit=' + limit + '&offset=' + offset, 
                    {
                        headers: new HttpHeaders().set('Authorization',  'Bearer ' + this.service.getToken()),
                    });
    }

    getUserRatings(login: string, orderBy: string, limit: number, offset: number):Observable<Array<Rating>>{
        return this.http.get<Array<Rating>>(this.host + 'api/users/' + login
                    + '/ratings?orderBy=' + orderBy + '&limit=' + limit + '&offset=' + offset, 
                    {
                        headers: new HttpHeaders().set('Authorization',  'Bearer ' + this.service.getToken()),
                    });
    }

    getUserRatingByMovie(userid: number, movieid:number):Observable<Rating>{
        return this.http.get<Rating>(this.host + 'api/users/' + userid
                    + '/ratings/' + movieid, 
                    {
                        headers: new HttpHeaders().set('Authorization',  'Bearer ' + this.service.getToken()),
                    });
    }

}
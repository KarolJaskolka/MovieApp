import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/rating';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    host: string = environment.host;

    constructor(private http:HttpClient) {}

    getUser(login: string) {
        return this.http.get<User>(this.host + 'api/users/' + login);
    }

    getUserComments(login: string, limit: number, offset: number){
        return this.http.get<Array<Comment>>(this.host + 'api/users/' + login 
                    + '/comments?limit=' + limit + '&offset=' + offset);
    }

    getUserRatings(login: string, orderBy: string, limit: number, offset: number){
        return this.http.get<Array<Rating>>(this.host + 'api/users/' + login
                    + '/ratings?orderBy=' + orderBy + '&limit=' + limit + '&offset=' + offset);
    }

    register(user: User){
        this.http.post(this.host + 'api/users/', user);
    }

}
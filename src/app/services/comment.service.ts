import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CommentService {

    host: string = environment.host;

    constructor(private http:HttpClient, private service:StorageService) {}

    sendComment(comment: Comment):Observable<any>{
        return this.http.post(this.host + 'api/comments', {
            movieid: comment.movieid,
            title: comment.title,
            description: comment.description
        }, {
            headers: new HttpHeaders().set('Authorization',  'Bearer ' + this.service.getToken()),
        });
    }

    updateComment(comment: Comment):Observable<any>{
        return this.http.patch(this.host + 'api/comments/' + comment.commentid, {
            title: comment.title,
            description: comment.description
        }, {
            headers: new HttpHeaders().set('Authorization',  'Bearer ' + this.service.getToken()),
        });
    }

    removeComment(commentid: number):Observable<any>{
        return this.http.delete(this.host + 'api/comments/' + commentid, {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' +  this.service.getToken()),
        });
    }

}
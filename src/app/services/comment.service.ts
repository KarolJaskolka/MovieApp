import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})

export class CommentService {

    host: string = environment.host;

    constructor(private http:HttpClient, private service:StorageService) {}

    sendComment(comment: Comment){
        this.http.post(this.host + 'api/comments', {
            userid: comment.userid,
            movieid: comment.movieid,
            title: comment.title,
            description: comment.description
        }, {
            headers: new HttpHeaders().set('Authorization', this.service.getToken()),
        });
    }

    updateComment(comment: Comment){
        this.http.patch(this.host + 'api/comments/' + comment.commentid, {
            title: comment.title,
            description: comment.description
        }, {
            headers: new HttpHeaders().set('Authorization', this.service.getToken()),
        });
    }

    removeComment(commentid: number){
        this.http.delete(this.host + 'api/comments/' + commentid, {
            headers: new HttpHeaders().set('Authorization', this.service.getToken()),
        });
    }

}
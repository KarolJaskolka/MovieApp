import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Rating } from '../models/rating';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RatingService {

    host: string = environment.host;

    constructor(private http:HttpClient, private service:StorageService) {}

    sendRating(rating: Rating):Observable<any>{
        return this.http.post(this.host + 'api/ratings', {
            movieid: rating.movieid,
            stars: rating.stars
        }, {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.service.getToken()),
        });
    }

    updateRating(rating: Rating):Observable<any>{
        return this.http.patch(this.host + 'api/ratings/' + rating.ratingid, {
            stars: rating.stars
        }, {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' +  this.service.getToken()),
        });
    }

    removeRating(ratingid: number):Observable<any>{
        return this.http.delete(this.host + 'api/ratings/' + ratingid, {
            headers: new HttpHeaders().set('Authorization', 'Bearer ' +  this.service.getToken()),
        });
    }

}
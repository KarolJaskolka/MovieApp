import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/rating';

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    host: string = environment.host;

    constructor(private http:HttpClient) {}

    getMovie(name: string) {
        return this.http.get<Movie>(this.host + 'api/movies/' + name);
    }

    getMovies(orderBy: string, limit: number, offset:number) {
        return this.http.get<Array<Movie>>(this.host + 'api/movies?orderBy=' + orderBy
            + '&limit=' + limit + '&offset=' + offset);
    }

    getMovieComments(name: string, limit:number, offset: number){
        return this.http.get<Array<Comment>>(this.host + 'api/movies/' + name 
            + '/comments?limit=' + limit + '&offset=' + offset);
    }

}
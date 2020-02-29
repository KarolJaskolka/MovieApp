import { Component, OnInit } from "@angular/core";
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
    selector: 'app-movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.scss']
})

export class MovieSearchComponent implements OnInit {

    title: string;
    movies: Array<Movie>;

    constructor(private router:Router, private movieService:MovieService, private route:ActivatedRoute) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; }
    }

    ngOnInit():void {
        this.route.queryParams.subscribe(queryParams => {
            this.title = queryParams.title;
        })
        this.movieService.getMoviesByTitle(this.title, 'rating', 10, 0).subscribe(data => {
            this.movies = data;
            console.log(this.movies);
        }) 
    }

}
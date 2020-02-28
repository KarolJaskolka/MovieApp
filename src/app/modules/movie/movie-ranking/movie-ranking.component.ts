import { Component, OnInit } from "@angular/core";
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
    selector: 'app-ranking',
    templateUrl: './movie-ranking.component.html',
    styleUrls: ['./movie-ranking.component.scss']
})

export class MovieRankingComponent implements OnInit{

    movies: Array<Movie>;

    constructor(private movieService:MovieService) {}

    ngOnInit(): void {
        this.movieService.getMovies('rating', 100, 0).subscribe(data => {
            this.movies = data;
        })
    }

}
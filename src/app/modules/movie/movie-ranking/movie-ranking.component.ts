import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-ranking',
    templateUrl: './movie-ranking.component.html',
    styleUrls: ['./movie-ranking.component.scss']
})

export class MovieRankingComponent implements OnInit, OnDestroy {

    movies: Array<Movie>;
    movieSubscription: Subscription;

    constructor(private movieService:MovieService) {}

    ngOnInit(): void {
        this.movieSubscription = this.movieService.getMovies('rating', 100, 0).subscribe(data => {
            this.movies = data;
        })
    }

    ngOnDestroy(){
        this.movieSubscription.unsubscribe();
    }

}
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
    
    movies: Array<Movie>;
    movieSubscription: Subscription;

    constructor(private movieService:MovieService) {}
    
    ngOnInit(): void {
        this.movieSubscription = this.movieService.getMovies('rating', 4, 0).subscribe(data => {
           this.movies = data;
        })
    }

    ngOnDestroy(){
        this.movieSubscription.unsubscribe();
    }
}
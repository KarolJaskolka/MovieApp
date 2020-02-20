import { Component, OnInit } from "@angular/core";
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    
    movies: Array<Movie>;

    constructor(private movieService:MovieService) {}
    
    ngOnInit(): void {
        this.movieService.getMovies('rating', 4, 0).subscribe(data => {
           this.movies = data;
           console.log(this.movies);
        })
    }
}
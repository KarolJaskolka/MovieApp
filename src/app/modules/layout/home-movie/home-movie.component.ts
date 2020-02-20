import { Component, Input } from "@angular/core";
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home-movie',
    templateUrl: './home-movie.component.html',
    styleUrls: ['./home-movie.component.scss']
})

export class HomeMovieComponent {

    @Input() movie:Movie;
    host: string = environment.host;

    constructor() {}

}
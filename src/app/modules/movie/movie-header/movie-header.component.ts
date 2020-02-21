import { Component, Input } from "@angular/core";
import { Movie } from 'src/app/models/movie';

@Component({
    selector: 'app-movie-header',
    templateUrl: './movie-header.component.html',
    styleUrls: ['./movie-header.component.scss']
})

export class MovieHeaderComponent {
    
    @Input() movie: Movie;

    constructor() {}

}
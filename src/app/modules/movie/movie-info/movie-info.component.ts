import { Component, Input } from "@angular/core";
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-movie-info',
    templateUrl: './movie-info.component.html',
    styleUrls: ['./movie-info.component.scss']
})

export class MovieInfoComponent {
    
    @Input() movie:Movie;
    host: string = environment.host;

}
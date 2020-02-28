import { Component, Input } from "@angular/core";
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-movie-view',
    templateUrl: './movie-view.component.html',
    styleUrls: ['./movie-view.component.scss']
})

export class MovieViewComponent {

    @Input() place:number;
    @Input() movie:Movie;
    host: string = environment.host;

}
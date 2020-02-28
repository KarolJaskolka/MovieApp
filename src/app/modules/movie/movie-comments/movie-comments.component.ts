import { Component, Input } from "@angular/core";
import { StorageService } from 'src/app/services/storage.service';
import { Movie } from 'src/app/models/movie';
import { Comment } from 'src/app/models/comment';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-movie-comments',
    templateUrl: './movie-comments.component.html',
    styleUrls: ['./movie-comments.component.scss']
})

export class MovieCommentsComponent {

    @Input() movie:Movie;
    comments: Array<Comment>
    logged: boolean = false;
    offset: number = 0;

    constructor(private storageService:StorageService, private movieService:MovieService) {}

    ngOnInit(): void {
        this.movieService.getMovieComments(this.movie.name, 10, this.offset).subscribe(data => {
            this.comments = data;
        });
        if(this.storageService.getUserId()){
            this.logged = true;
        }
    }
}
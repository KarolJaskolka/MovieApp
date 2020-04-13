import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { StorageService } from 'src/app/services/storage.service';
import { Movie } from 'src/app/models/movie';
import { Comment } from 'src/app/models/comment';
import { MovieService } from 'src/app/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-movie-comments',
    templateUrl: './movie-comments.component.html',
    styleUrls: ['./movie-comments.component.scss']
})

export class MovieCommentsComponent implements OnInit, OnDestroy {

    @Input() movie:Movie;
    comments: Array<Comment>
    logged: boolean = false;
    offset: number = 0;
    movieSubscription: Subscription;

    constructor(private storageService:StorageService, private movieService:MovieService) {}

    ngOnInit(): void {
        this.getComments();
        if(this.storageService.getUserId()){
            this.logged = true;
        }
    }

    getComments(){
        this.movieSubscription = this.movieService.getMovieComments(this.movie.name, 10, this.offset).subscribe(data => {
            this.comments = data;
        });
    }

    reloadComments(event){
        this.getComments();
    }

    ngOnDestroy() {
        this.movieSubscription.unsubscribe();
    }
}
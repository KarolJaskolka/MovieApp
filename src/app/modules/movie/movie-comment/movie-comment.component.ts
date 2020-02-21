import { Component, Input } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-movie-comment',
    templateUrl: './movie-comment.component.html',
    styleUrls: ['./movie-comment.component.scss']
})

export class MovieCommentComponent {
    
    @Input() comment: Comment;
    host: string = environment.host;

}
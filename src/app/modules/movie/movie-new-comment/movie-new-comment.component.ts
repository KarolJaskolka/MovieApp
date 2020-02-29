import { Component, OnInit, Input } from "@angular/core";
import { StorageService } from 'src/app/services/storage.service';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';

@Component({
    selector: 'app-movie-new-comment',
    templateUrl: './movie-new-comment.component.html',
    styleUrls: ['./movie-new-comment.component.scss']
})

export class MovieNewCommentComponent implements OnInit {

    logged: boolean = false;
    comment: Comment = {} as Comment;
    @Input() movieid: number;

    constructor(private storageService:StorageService, private commentService:CommentService) {}

    ngOnInit(): void {
        this.comment.userid = +this.storageService.getUserId();
        this.comment.movieid = this.movieid;
        if(this.comment.userid){
            this.logged = true;
        }
    }

    send() {
        if(this.comment.title && this.comment.description){
            this.commentService.sendComment(this.comment).subscribe(data => {
                console.log(data);
                window.location.reload();
            }, error => {
                console.log(error);
            })
        }
    }

}
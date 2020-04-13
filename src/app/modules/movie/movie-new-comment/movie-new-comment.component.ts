import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { StorageService } from 'src/app/services/storage.service';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-movie-new-comment',
    templateUrl: './movie-new-comment.component.html',
    styleUrls: ['./movie-new-comment.component.scss']
})

export class MovieNewCommentComponent implements OnInit, OnDestroy {

    logged: boolean = false;
    comment: Comment = {} as Comment;
    commentSubscription: Subscription;
    @Input() movieid: number;
    @Output() addComment: EventEmitter<void>;

    constructor(private storageService:StorageService, private commentService:CommentService, 
        private toastrService:ToastrService) {
            this.addComment = new EventEmitter<void>();
        }

    ngOnInit(): void {
        this.comment.userid = +this.storageService.getUserId();
        this.comment.movieid = this.movieid;
        if(this.comment.userid){
            this.logged = true;
        }
    }

    send() {
        if(this.comment.title && this.comment.description){
            this.commentSubscription = this.commentService.sendComment(this.comment).subscribe(data => {
                this.toastrService.success('Comment has been sent', 'Done!');
                this.addComment.emit();
            }, error => {
                this.toastrService.error('Something went wrong :/', 'Error!')
            });
            this.comment.title = '';
            this.comment.description = '';
        }
    }

    ngOnDestroy(){
        if(this.commentSubscription) this.commentSubscription.unsubscribe();
    }

}
import { Component, OnInit } from "@angular/core";
import { Comment } from 'src/app/models/comment';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-user-comments-list',
    templateUrl: './user-comments-list.component.html',
    styleUrls: ['./user-comments-list.component.scss']
})

export class UserCommentsListComponent implements OnInit {

    comments: Array<Comment>;
    login: string;
    offset: number = 0;

    constructor(private userService:UserService, private route:ActivatedRoute, 
        private commentService:CommentService, private toastrService:ToastrService) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.login = params.login;
        })
        this.userService.getUserComments(this.login, 25, this.offset).subscribe(data => {
            this.comments = data;
        })
    }

    delete(comment:Comment){
        this.commentService.removeComment(comment.commentid).subscribe(() => {
            this.comments = this.comments.filter(e => e.commentid != comment.commentid);
            this.toastrService.success('Comment has been removed', 'Done!');
        }, error => {
            this.toastrService.success('Something went wrong :/', 'Error');
        })
    }

}


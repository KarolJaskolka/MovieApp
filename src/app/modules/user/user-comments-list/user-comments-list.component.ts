import { Component, OnInit } from "@angular/core";
import { Comment } from 'src/app/models/comment';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-user-comments-list',
    templateUrl: './user-comments-list.component.html',
    styleUrls: ['./user-comments-list.component.scss']
})

export class UserCommentsListComponent implements OnInit {

    comments: Array<Comment>;
    login: string;
    offset: number = 0;
    logged: boolean = false;

    constructor(private userService:UserService, private route:ActivatedRoute, 
        private commentService:CommentService, private toastrService:ToastrService, 
        private storageService:StorageService) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.login = params.login;
        })
        this.userService.getUserComments(this.login, 25, this.offset).subscribe(data => {
            this.comments = data;
        })
        if(this.login == this.storageService.getLogin()){
            this.logged = true;
        }
    }

    delete(comment:Comment){
        this.commentService.removeComment(comment.commentid).subscribe(() => {
            this.comments = this.comments.filter(e => e.commentid != comment.commentid);
            this.toastrService.success('Comment has been removed', 'Done!');
        }, error => {
            this.toastrService.error('Something went wrong :/', 'Error!');
        })
    }

}


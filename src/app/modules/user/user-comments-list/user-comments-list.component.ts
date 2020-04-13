import { Component, OnInit, OnDestroy } from "@angular/core";
import { Comment } from 'src/app/models/comment';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/services/storage.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-comments-list',
    templateUrl: './user-comments-list.component.html',
    styleUrls: ['./user-comments-list.component.scss']
})

export class UserCommentsListComponent implements OnInit, OnDestroy {

    comments: Array<Comment>;
    login: string;
    offset: number = 0;
    logged: boolean = false;
    userSubscription: Subscription;
    commentSubscription: Subscription;
    routeSubscription: Subscription;

    constructor(private userService:UserService, private route:ActivatedRoute, 
        private commentService:CommentService, private toastrService:ToastrService, 
        private storageService:StorageService) {}

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.login = params.login;
        })
        this.getData();
        if(this.login == this.storageService.getLogin()){
            this.logged = true;
        }
    }

    getData(){
        this.userSubscription = this.userService.getUserComments(this.login, 25, this.offset).subscribe(data => {
            this.comments = data;
        })
    }

    delete(comment:Comment){
        this.commentSubscription = this.commentService.removeComment(comment.commentid).subscribe(() => {
            this.getData();
            this.toastrService.success('Comment has been removed', 'Done!');
        }, error => {
            this.toastrService.error('Something went wrong :/', 'Error!');
        })
    }

    ngOnDestroy(){
        if(this.commentSubscription) this.commentSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }

}


import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { Comment } from 'src/app/models/comment';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-comments',
    templateUrl: './user-comments.component.html',
    styleUrls: ['./user-comments.component.scss']
})

export class UserCommentsComponent implements OnInit, OnDestroy {
    
    @Input() login: string;
    comments: Array<Comment>;
    userSubscription: Subscription;

    constructor(private userService:UserService) {}
    
    ngOnInit(): void {
        this.userSubscription = this.userService.getUserComments(this.login, 4, 0).subscribe(data => {
            this.comments = data;
        })
    }

    ngOnDestroy(){
        this.userSubscription.unsubscribe();
    }

}
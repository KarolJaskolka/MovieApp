import { Component, OnInit, Input } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { Comment } from 'src/app/models/comment';

@Component({
    selector: 'app-user-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})

export class UserCommentsComponent implements OnInit {
    
    @Input() login: string;
    comments: Array<Comment>;

    constructor(private userService:UserService) {}
    
    ngOnInit(): void {
        this.userService.getUserComments(this.login, 4, 0).subscribe(data => {
            this.comments = data;
        })
    }

}
import { Component, Input } from "@angular/core";
import { Comment } from '../../../models/comment';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-user-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})

export class UserCommentComponent {

    @Input() comment: Comment;
    host: string = environment.host;

    constructor() {}

}
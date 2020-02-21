import { Component, Input, OnInit } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { Rating } from 'src/app/models/rating';

@Component({
    selector: 'app-user-ratings',
    templateUrl: './user-ratings.component.html',
    styleUrls: ['./user-ratings.component.scss']
})

export class UserRatingsComponent implements OnInit {

    @Input() login: string;
    ratings: Array<Rating>;

    constructor(private userService:UserService) {}

    ngOnInit(): void {
        this.userService.getUserRatings(this.login, 'date', 4, 0).subscribe(data => {
            this.ratings = data;
        });
    }

}
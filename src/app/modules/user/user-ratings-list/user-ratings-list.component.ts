import { Component, OnInit } from "@angular/core";
import { Rating } from 'src/app/models/rating';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-ratings-list',
    templateUrl: './user-ratings-list.component.html',
    styleUrls: ['./user-ratings-list.component.scss']
})

export class UserRatingsListComponent implements OnInit {

    login: string;
    ratings: Array<Rating>;
    offset: number = 0;

    constructor(private userService:UserService, private route:ActivatedRoute) {}

    ngOnInit(): void {

        this.route.params.subscribe(params => {
            this.login = params.login;
        })
        this.userService.getUserRatings(this.login, 'stars', 25, this.offset).subscribe(data => {
            this.ratings = data;
        })
    }

}
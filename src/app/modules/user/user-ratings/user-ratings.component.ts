import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { Rating } from 'src/app/models/rating';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-ratings',
    templateUrl: './user-ratings.component.html',
    styleUrls: ['./user-ratings.component.scss']
})

export class UserRatingsComponent implements OnInit, OnDestroy {

    @Input() login: string;
    ratings: Array<Rating>;
    userSubscription: Subscription;

    constructor(private userService:UserService) {}

    ngOnInit(): void {
        this.userSubscription = this.userService.getUserRatings(this.login, 'date', 4, 0).subscribe(data => {
            this.ratings = data;
        });
    }

    ngOnDestroy(){
        this.userSubscription.unsubscribe();
    }

}
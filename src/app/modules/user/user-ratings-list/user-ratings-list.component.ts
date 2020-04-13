import { Component, OnInit, OnDestroy } from "@angular/core";
import { Rating } from 'src/app/models/rating';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { RatingService } from 'src/app/services/rating.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-ratings-list',
    templateUrl: './user-ratings-list.component.html',
    styleUrls: ['./user-ratings-list.component.scss']
})

export class UserRatingsListComponent implements OnInit, OnDestroy {

    login: string;
    ratings: Array<Rating>;
    offset: number = 0;
    logged: boolean = false;
    userSubscription: Subscription;
    routeSubscription: Subscription;
    ratingSubscription: Subscription;

    constructor(private userService:UserService, private route:ActivatedRoute, 
        private storageService:StorageService, private ratingService:RatingService,
        private toastrService:ToastrService) {}

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.login = params.login;
        })
        if(this.storageService.getLogin() == this.login){
            this.logged = true;
        }
        this.getData();
    }

    getData(){
        this.userSubscription = this.userService.getUserRatings(this.login, 'stars', 25, this.offset).subscribe(data => {
            this.ratings = data;
        })
    }

    delete(rating: Rating){
        this.ratingSubscription = this.ratingService.removeRating(rating.ratingid).subscribe(data => {
            this.toastrService.success('Rating has been removed', 'Done!');
            this.getData();
        }, error => {
            this.toastrService.error('Something went wrong :/', 'Error!');
        })
    }

    ngOnDestroy(){
        if(this.ratingSubscription) this.ratingSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }

}
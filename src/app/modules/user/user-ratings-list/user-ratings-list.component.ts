import { Component, OnInit } from "@angular/core";
import { Rating } from 'src/app/models/rating';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { RatingService } from 'src/app/services/rating.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-user-ratings-list',
    templateUrl: './user-ratings-list.component.html',
    styleUrls: ['./user-ratings-list.component.scss']
})

export class UserRatingsListComponent implements OnInit {

    login: string;
    ratings: Array<Rating>;
    offset: number = 0;
    logged: boolean = false;

    constructor(private userService:UserService, private route:ActivatedRoute, 
        private storageService:StorageService, private ratingService:RatingService,
        private toastrService:ToastrService) {}

    ngOnInit(): void {
        if(this.storageService.getLogin()){
            this.logged = true;
        }
        this.route.params.subscribe(params => {
            this.login = params.login;
        })
        this.getData();
    }

    getData(){
        this.userService.getUserRatings(this.login, 'stars', 25, this.offset).subscribe(data => {
            this.ratings = data;
        })
    }

    delete(rating: Rating){
        this.ratingService.removeRating(rating.ratingid).subscribe(data => {
            this.toastrService.success('Rating has been removed', 'Done!');
            this.getData();
        }, error => {
            this.toastrService.error('Something went wrong :/', 'Error!');
        })
    }

}
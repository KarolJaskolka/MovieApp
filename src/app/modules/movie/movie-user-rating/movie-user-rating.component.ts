import { Component, Input, OnInit } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { Rating } from 'src/app/models/rating';
import { RatingService } from 'src/app/services/rating.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-movie-user-rating',
    templateUrl: './movie-user-rating.component.html',
    styleUrls: ['./movie-user-rating.component.scss']
})

export class MovieUserRatingComponent implements OnInit {
    
    @Input() movieid: number;
    @Input() userid: number;

    rating: Rating;
    stars: Array<number> = new Array(10);
    new: boolean;
    hidden: boolean = true;

    constructor(private userService: UserService, private ratingService:RatingService, 
        private toastrService:ToastrService) {}

    ngOnInit(): void {
        this.userService.getUserRatingByMovie(this.userid, this.movieid).subscribe(data => {
            if(data){
                this.rating = data;
                this.stars = this.stars.fill(1,0,this.rating.stars);
                this.stars = this.stars.fill(0,this.rating.stars);
                this.new = false;
            }
            else{
                this.rating = {} as Rating;
                this.rating.movieid = this.movieid;
                this.rating.userid = this.userid;
                this.rating.stars = 1;
                this.new = true;
                this.stars = this.stars.fill(0);
            }
        })
    }

    setRating(index: number){
        this.hidden = false;
        this.rating.stars = index;
        this.stars = this.stars.fill(1,0,index);
        this.stars = this.stars.fill(0,index);
    }

    sendRating(){
        this.hidden = true;
        if(this.new){
            this.ratingService.sendRating(this.rating).subscribe(data => {
                this.toastrService.success('Your rating has been saved', 'Done!');
                this.new = false;
            }, error => {
                this.toastrService.error('Something went wrong :/', 'Error');
            });
        }
        else{
            this.ratingService.updateRating(this.rating).subscribe(data => {
                this.toastrService.success('Your rating has been saved', 'Done!');
            }, error => {
                this.toastrService.error('Something went wrong :/', 'Error');
            });
        }
    }

    getButtonClass() {
        return this.hidden ? 'hidden' : 'btnSave';
    }

}
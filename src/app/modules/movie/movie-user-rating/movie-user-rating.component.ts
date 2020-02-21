import { Component, Input, OnInit } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { Rating } from 'src/app/models/rating';
import { RatingService } from 'src/app/services/rating.service';

@Component({
    selector: 'app-movie-user-rating',
    templateUrl: './movie-user-rating.component.html',
    styleUrls: ['./movie-user-rating.component.scss']
})

export class MovieUserRatingComponent implements OnInit {
    
    @Input() movieid: number;
    @Input() userid: number;
    rating: Rating;
    starsFocus: Array<number>;
    starsBlur: Array<number>;
    new: boolean;

    constructor(private userService: UserService, private ratingService:RatingService) {}

    ngOnInit(): void {
        this.userService.getUserRatingByMovie(this.userid, this.movieid).subscribe(data => {
            if(data){
                this.rating = data;
                this.starsFocus = Array(this.rating.stars).fill(0);
                this.starsBlur = Array(10 - this.rating.stars).fill(0);
                this.new = false;
            }
            else{
                this.rating = {} as Rating;
                this.rating.movieid = this.movieid;
                this.rating.userid = this.userid;
                this.rating.stars = 1;
                this.new = true;
                this.starsFocus = Array(0).fill(0);
                this.starsBlur = Array(10).fill(0);
            }
        })
    }

    setRating(event){
        const clicked = event.target;
        const stars = document.getElementsByClassName('star');
        const button = document.getElementsByClassName('hidden')[0];
        if(button) button.className = 'btnSave'; // user is able to click on stars many times
        let className = 'material-icons star starFocus';
        this.rating.stars = 0;
        let add = true;
        for(let i=0; i < stars.length; i++){
            if(add) this.rating.stars++; 
            stars[i].className = className;
            if(stars[i] == clicked){
                className = 'material-icons star starBlur';
                add = false;
            }
        }
    }

    sendRating(event){
        const button = event.target;
        button.className = 'hidden';
        if(this.new){
            this.ratingService.sendRating(this.rating).subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
        }
        else{
            this.ratingService.updateRating(this.rating).subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
        }

    }

}
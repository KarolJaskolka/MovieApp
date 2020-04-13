import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-movie',
    templateUrl: './movie-main.component.html',
    styleUrls: ['./movie-main.component.scss']
})

export class MovieMainComponent implements OnInit, OnDestroy {
    
    movie: Movie;
    name: string;
    logged: boolean = false;
    userid: number;
    routeSubscription: Subscription;
    movieSubscription: Subscription;

    constructor(private route:ActivatedRoute, private movieService:MovieService,
        private storageService:StorageService) {}

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.name = params.name;
        })
        this.movieSubscription = this.movieService.getMovie(this.name).subscribe(data => {
            this.movie = data;
        })
        this.userid = +this.storageService.getUserId()
        if(this.userid){
            this.logged = true;
        }
    }

    ngOnDestroy(){
        this.movieSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }

}
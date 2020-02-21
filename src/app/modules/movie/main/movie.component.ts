import { Component, OnInit } from "@angular/core";
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
    
    movie: Movie;
    name: string;
    logged: boolean = false;

    constructor(private route:ActivatedRoute, private movieService:MovieService,
        private storageService:StorageService) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.name = params.name;
        })
        this.movieService.getMovie(this.name).subscribe(data => {
            this.movie = data;
        })
        if(this.storageService.getUserId()){
            this.logged = true;
        }
    }

}
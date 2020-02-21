import { Component, Input } from "@angular/core";
import { Movie } from 'src/app/models/movie';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-movie-header',
    templateUrl: './movie-header.component.html',
    styleUrls: ['./movie-header.component.scss']
})

export class MovieHeaderComponent {
    
    @Input() movie: Movie;

    logged: boolean = false;

    constructor(private storageService:StorageService) {}

    ngOnInit(): void {
        if(this.storageService.getUserId()){
            this.logged = true;
        }
    }


}
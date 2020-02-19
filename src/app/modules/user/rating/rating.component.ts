import { Component, Input } from "@angular/core";
import { Rating } from 'src/app/models/rating';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-user-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})

export class UserRatingComponent {

    @Input() rating: Rating;
    host: string = environment.host;

    constructor() {}

}
import { Component, Input } from "@angular/core";
import { Rating } from 'src/app/models/rating';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-user-rating',
    templateUrl: './user-rating.component.html',
    styleUrls: ['./user-rating.component.scss']
})

export class UserRatingComponent {

    @Input() rating: Rating;
    host: string = environment.host;

    constructor() {}

}
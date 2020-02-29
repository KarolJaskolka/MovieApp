import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent {

    userInput: string;

    constructor (private router:Router) {}

    clear(){
        this.userInput = '';
    }

    search(){
        this.clear();
        this.router.navigate(['/search'], { queryParams: {title: this.userInput} });
    }

}
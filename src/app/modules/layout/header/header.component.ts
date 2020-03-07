import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    hidden: boolean = true;

    constructor() {}

    changeHidden(){
        this.hidden = !this.hidden;
    }

    setHidden(value: boolean){
        this.hidden = value;
    }

    getStyle(){
        return this.hidden ? 'hidden' : '';
    }

}
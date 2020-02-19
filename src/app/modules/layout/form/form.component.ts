import { Component } from "@angular/core";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent {

    login: boolean = true;

    constructor() {}

    setForm(event, value: boolean){
        const elem = event.target;
        const active = document.querySelector('button.active');

        active.className = "";
        elem.className = "active";

        this.login = value; 
    }

}
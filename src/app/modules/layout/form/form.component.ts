import { Component } from "@angular/core";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent {

    isLogin: boolean = true;

    constructor() {}

    setForm(value: boolean){
        this.isLogin = value; 
    }

}
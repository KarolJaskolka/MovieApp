import { Component } from "@angular/core";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignUpComponent {

    newUser: User = {} as User;

    constructor(private userService:UserService) {}

    signUp(event){
        event.preventDefault();
        console.log(this.newUser)
        this.userService.register(this.newUser)
    }

}
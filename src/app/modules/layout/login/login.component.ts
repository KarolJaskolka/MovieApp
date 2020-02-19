import { Component } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LogInComponent {

    login: string;
    password: string;
    warningStyle: string = 'none';

    constructor(private authService:AuthService, private storageService:StorageService, private router:Router,) {}

    logIn(event){
        event.preventDefault();
        if(this.validate()){
            this.authService.login(this.login,this.password).subscribe(
                data => {
                    this.storageService.setLogin(data.login);
                    this.storageService.setUserId(data.userid);
                    this.storageService.setToken(data.token);
                    this.warningStyle = 'none';
                    this.router.navigate(['/user', this.storageService.getLogin()]);
                }, error => {
                    this.warningStyle = 'block';
                }
            );
        }
    }

    validate(){
        let result = true;
        if(!this.validateLogin()) result = false;
        if(!this.validatePassword()) result = false;
        return result;
    }

    validateLogin(){
        const input = document.getElementsByTagName('input')[0];
        console.log(input);
        if(!this.login){
            input.className = 'redBorder';
            return false;
        } else if (!this.login.trim()){
            input.className = 'redBorder';
            return false;
        }
        input.className = '';
        return true;
    }

    validatePassword(){
        if(!this.password){
            console.log('Password can not be empty!');
            return false;
        }
        return true;
    }

}
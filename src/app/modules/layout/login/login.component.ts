import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-log-in',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LogInComponent implements OnInit {

    login: string;
    password: string;
    warningStyle: string = 'none';
    logInForm: FormGroup;

    constructor(private authService:AuthService, private storageService:StorageService, 
        private router:Router,private formBuilder:FormBuilder) {}

    ngOnInit(): void {
        this.logInForm = this.formBuilder.group({
            login: [null, Validators.required],
            password: [null, Validators.required]
        })
    }

    logIn(event){
        event.preventDefault();
        this.getData();
        this.authService.login(this.login,this.password).subscribe(
            data => {
                this.storageService.setLogin(data.login);
                this.storageService.setUserId(data.userid);
                this.storageService.setToken(data.token);
                this.router.navigate(['/user', this.storageService.getLogin()]);
            }, error => {
                console.log(error);
            }
        );
    }

    getData() {
        this.login = this.logInForm.get('login').value;
        this.password = this.logInForm.get('password').value;
    }

}
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-log-in',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LogInComponent implements OnInit, OnDestroy {

    login: string;
    password: string;
    warningStyle: string = 'none';
    logInForm: FormGroup;

    authSubscription: Subscription;

    constructor(private authService:AuthService, private storageService:StorageService, 
        private router:Router,private formBuilder:FormBuilder, private toastrService:ToastrService) {}

    ngOnInit(): void {
        this.logInForm = this.formBuilder.group({
            login: [null, Validators.required],
            password: [null, Validators.required]
        })
    }

    logIn(event){
        event.preventDefault();
        this.getData();
        this.authSubscription = this.authService.login(this.login,this.password).subscribe(
            data => {
                this.storageService.setToken(data.token);
                this.storageService.setRefreshToken(data.refreshToken);
                this.toastrService.success(`Welcome ${this.login} !`);
                this.router.navigate(['/user', this.storageService.getLogin()]);
            }, error => {
                this.toastrService.error('Wrong login or password', 'Error');
            }
        );
    }

    getData() {
        this.login = this.logInForm.get('login').value;
        this.password = this.logInForm.get('password').value;
    }

    ngOnDestroy() {
        if(this.authSubscription) this.authSubscription.unsubscribe();
    }

}
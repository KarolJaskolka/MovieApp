import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignUpComponent implements OnInit, OnDestroy {

    newUser: User = {} as User;
    signUpForm: FormGroup;
    registerError: boolean = false;
    userSubscription: Subscription;

    constructor(private authService:AuthService, private formBuilder: FormBuilder, 
        private router:Router, private toastrService:ToastrService) {}

    ngOnInit() {
        const emailPattern = '^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$';
        const passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,40}$';
        //const datePattern = '^[1-2][0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$';

        this.signUpForm = this.formBuilder.group({
            login: [null, Validators.required],
            password: [null, [Validators.required, Validators.pattern(passwordPattern)]],
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            email: [null, [Validators.required, Validators.pattern(emailPattern)]]
            //phone: [null],
            //birth: [null, [Validators.required, Validators.pattern(datePattern)]]
        });
    }

    signUp(event){
        event.preventDefault();
        this.userSubscription = this.authService.register(this.signUpForm.value).subscribe(data => {
            this.toastrService.success('Done!');
            this.router.navigate(['/form/success']);
        }, error => {
            this.registerError = true;
        });
    }

    ngOnDestroy(){
        if(this.userSubscription) this.userSubscription.unsubscribe();
    }

}
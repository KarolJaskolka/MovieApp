import { Component, OnInit } from "@angular/core";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-sign-up',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignUpComponent implements OnInit {

    newUser: User = {} as User;
    signUpForm: FormGroup;
    registerError: boolean = false;

    constructor(private userService:UserService, private formBuilder: FormBuilder, 
        private router:Router, private toastrService:ToastrService) {}

    ngOnInit() {
        const emailPattern = '^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$';
        const passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,40}$';
        const datePattern = '^[1-2][0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$';

        this.signUpForm = this.formBuilder.group({
            login: [null, Validators.required],
            password: [null, [Validators.required, Validators.pattern(passwordPattern)]],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, [Validators.required, Validators.pattern(emailPattern)]],
            phone: [null],
            birth: [null, [Validators.required, Validators.pattern(datePattern)]]
        });
    }

    signUp(event){
        event.preventDefault();
        this.getData();
        this.userService.register(this.newUser).subscribe(data => {
            this.toastrService.success('Done!');
            this.router.navigate(['/form/success']);
        }, error => {
            this.registerError = true;
        });
    }

    getData() {
        this.newUser.login = this.signUpForm.get('login').value;
        this.newUser.password = this.signUpForm.get('password').value;
        this.newUser.firstname = this.signUpForm.get('firstName').value;
        this.newUser.lastname = this.signUpForm.get('lastName').value;
        this.newUser.email = this.signUpForm.get('email').value;
        this.newUser.phone = this.signUpForm.get('phone').value;
        this.newUser.birth = this.signUpForm.get('birth').value;
    }

}
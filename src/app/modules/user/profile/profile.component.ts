import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    login: string;
    user: User;

    constructor(private service:UserService, private route:ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.login = params.login;
        })
        this.service.getUser(this.login).subscribe(data => {
            this.user = data;
        })
    }

}

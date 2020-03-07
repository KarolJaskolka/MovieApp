import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styles: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

    login: string;
    user: User;

    constructor(private router:Router, private service:UserService, private route:ActivatedRoute) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; }
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.login = params.login;
        })
        this.service.getUser(this.login).subscribe(data => {
            this.user = data;
        })
    }

}

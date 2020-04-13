import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styles: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

    login: string;
    user: User;
    userSubscription: Subscription;
    routeSubscription: Subscription;

    constructor(private router:Router, private service:UserService, private route:ActivatedRoute) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; }
    }

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.login = params.login;
        })
        this.userSubscription = this.service.getUser(this.login).subscribe(data => {
            this.user = data;
        })
    }

    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }

}

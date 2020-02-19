import { Component, Input, OnInit } from "@angular/core";
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-user-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class UserInfoComponent implements OnInit {

    @Input() user:User;
    host: string = environment.host;

    constructor() {}

    ngOnInit() :void {

    }

}
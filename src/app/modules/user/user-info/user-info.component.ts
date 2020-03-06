import { Component, Input, OnInit } from "@angular/core";
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

    @Input() user:User;
    host: string = environment.host;
    logged: boolean = false;

    constructor(private storageService:StorageService, private router:Router, private toastrService:ToastrService) {}

    ngOnInit() :void {
        if(this.storageService.getLogin() == this.user.login){
            this.logged = true;
        }
    }

    logout(){
        this.storageService.logout();
        this.toastrService.success('You have been logged out');
        this.router.navigate(['/home']);
    }

}
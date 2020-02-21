import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})

export class AccountComponent {

    constructor(private router:Router, private storageService:StorageService) {}

    session(){
        const login = this.storageService.getLogin();
        if(!login){
            this.router.navigate(['/login']);
        } else{
            this.router.navigate(['/user', login]);
        }
    }

}
import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()

export class UserGuard implements CanActivate {
    
    constructor(private storageService:StorageService, private router:Router) {}

    canActivate(): boolean {
        if(this.storageService.getToken()){
            return true;
        }
        this.router.navigate(['/form/login']);
        return false;
    }

}
import { Injectable } from "@angular/core";
import * as jwt_decode from "jwt-decode";
@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor() {}

    setToken(token: string){
        localStorage.setItem('token', token);
    }

    setRefreshToken(token: string){
        localStorage.setItem('refreshToken', token);
    }

    getToken(){
        return localStorage.getItem('token');
    }

    getRefreshToken(){
        return localStorage.getItem('refreshToken');
    }

    getLogin(){
        const token = this.getToken();
        return token ? this.getDecodedAccessToken(token).login : null;
    }

    getUserId(){
        const token = this.getToken();
        return  token ? this.getDecodedAccessToken(token).userid : null;
    }

    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('cookies');
    }

    getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
    }

    acceptCookies() {
        localStorage.setItem('cookies', 'accepted');
    }

    getCookiesConsent() {
        return localStorage.getItem('cookies');
    }

}
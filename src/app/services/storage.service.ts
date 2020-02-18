import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor() {}

    setLogin(login: string){
        localStorage.setItem('login', login);
    }

    setUserId(userId: string){
        localStorage.setItem('userId', userId);
    }

    setToken(token: string){
        localStorage.setItem('token', token);
    }

    getLogin(){
        return localStorage.getItem('login');
    }

    getUserId(){
        return localStorage.getItem('userId');
    }

    getToken(){
        return localStorage.getItem('token');
    }

    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        localStorage.removeItem('userId');
    }

}
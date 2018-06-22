import {Subject } from 'rxjs/Subject';
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService{
constructor(private router:Router){

}
private userData:User;
authChange=new Subject<boolean>();

registerUser(authData:AuthData){
    this.userData={
     email:authData.email,
     userid:Math.round(Math.random()*10000).toString()
    };
    this.authSuccessfully();
}

login(authData:AuthData){
    this.userData={
        email:authData.email,
        userid:Math.round(Math.random()*10000).toString()
       };
       this.authSuccessfully();
}

logout(){
    this.userData=null;
    this.authChange.next(false);
    this.router.navigate(['/login'])
}

getUser(){
    return {...this.userData};
}

isAuth(){
    return this.userData!=null;
}
authSuccessfully(){
    this.authChange.next(true);
    this.router.navigate(['/training'])
}
}
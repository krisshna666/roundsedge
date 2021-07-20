import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{


 private loggedinstatus=false;
 
  setLoggedIn(value:boolean){
    this.loggedinstatus=value;
  }
  get LoggedIn(){
    return this.loggedinstatus;
  }
}
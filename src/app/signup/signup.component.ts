import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public firebaseService: FirebaseService,private _router:Router) {}
  passwordSignup="";
  loggedIn = false;
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
   this._router.navigate(["/login"]);
    if(this.firebaseService.isLoggedIn)
    this.loggedIn = false;
   
  }
  ngOnInit() {
    if(localStorage.getItem('user')!== null)
    this.loggedIn= true
    else
    this.loggedIn = false
  }
}

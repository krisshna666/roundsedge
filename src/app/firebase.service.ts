import { Route } from '@angular/compiler/src/core';
import { Injectable, Input } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
// import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';
import { AuthService } from './auth.service';
import 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  
  constructor(public firebaseAuth : AngularFireAuth,private _router:Router,private _auths: AngularFireDatabase,private auth:AuthService) { }
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user));
      this._auths.list("users6").push({"Email":email,"Password":password});
 if(email.slice(-9)=="admin.com")
 {
   this._router.navigate(["/mainadmin/administrator"]);
 }
 else {
    this._router.navigate(["/User/translator"]);
 }
    })

  }
  async signup(email: string, password : string){
    
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user));
      this._router.navigate(["/login"]);
      
   
     
    })
}
async signup1(email:string,password:string){
  await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
  

  })
}
@Input() usernames="";
async loginwithGoogle(){
  await this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
    res=>{
      alert("logged in successfully");
      this.auth.setLoggedIn(true); 
      this._router.navigate(["/User/translator"]);
    }).catch(
      err=>{
        alert("Error persists during login");
        console.log(err);
      })
     
  }
  async signinwithfb(){
    await this.firebaseAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      res=>{
        alert("logged in successfully");
        this.auth.setLoggedIn(true); 
        this._router.navigate(["/User/translator"]);
        
      }).catch(
        err=>{
          alert("Error persists during login");
          console.log(err);
        })
      }



}
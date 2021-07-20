import { Route } from '@angular/compiler/src/core';
import { Injectable, Input } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
// import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';

import 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  
  constructor(public firebaseAuth : AngularFireAuth,private _router:Router,private _auths: AngularFireDatabase) { }
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user));

 if(email.slice(-9)=="admin.com")
 {
   this._router.navigate(["/administrator"]);
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
      
    this._auths.list("users4").push({"Email":email,"Password":password});
     
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
      alert("login has done successfully")
    }).catch(
      err=>{
        alert("Error occurs during login");
        console.log(err);
      })
  }
  async signinwithfb(){
    await this.firebaseAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      res=>{
        alert("login has done successfully")
        
      }).catch(
        err=>{
          alert("Error occurs during login");
          console.log(err);
        })
      }



}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  loggedIn=false;
  constructor(private fb: FormBuilder,private firebaseService:FirebaseService,private auth:AuthService) {}
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    {
    this.loggedIn = true;
    this.auth.setLoggedIn(true); 
    }
  
  }
  loginWithGmail() {
    this.firebaseService.loginwithGoogle();
  }
  loginwithfb(){
    this.firebaseService.signinwithfb();
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}

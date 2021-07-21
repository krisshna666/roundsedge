import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-mainadmin',
  templateUrl: './mainadmin.component.html',
  styleUrls: ['./mainadmin.component.css']
})
export class MainadminComponent implements OnInit {

  constructor(private _auths: AngularFireDatabase,private router:Router,private route:ActivatedRoute,private auth:AuthService) { }
  canDeactivate(){
    return new Promise((resolve, reject) => {
  
      resolve(confirm('Do you want to Logout?')),this.auth.setLoggedIn(false),
      alert("Loggedout Successfully");
    
      
    })
  }


  ngOnInit(): void {
  }

}

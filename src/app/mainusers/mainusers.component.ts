
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
@Component({
  selector: 'app-mainusers',
  templateUrl: './mainusers.component.html',
  styleUrls: ['./mainusers.component.css']
})
export class MainusersComponent implements OnInit {
data:any;
  constructor(private _auths: AngularFireDatabase) {
    this._auths.list("users6").valueChanges().subscribe((data)=>this.data=data);
   }

  ngOnInit(): void {
  }

}

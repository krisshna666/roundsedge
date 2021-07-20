import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList, snapshotChanges} from '@angular/fire/database';
import { FirebaseService } from '../firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],

})
export class ChatComponent implements OnInit {
data:any="";
data1:any="";
today: number = Date.now();
t:any="";
boo:boolean=false;
disp:boolean=false;
disp1:boolean=true;
myname="";
join(m:any){
  this.myname=m;
  this.disp=true;
  this.disp1=false;
}
  constructor(public _auths:AngularFireDatabase,public fbs:FirebaseService) {
this._auths.list("messages").valueChanges().subscribe(data=>{
 
  this.data=data;
});

this._auths.list("messages").snapshotChanges().subscribe(data=>{
  var html="";

  let a: any = [];
  data.forEach(v => {
      let b: any = { key: v.key, data: v.payload.val() };
    a.push({ key: b.key, ...b.data });
  });
  // console.log( data.val());

  this.data1 = a;
  if(this.myname==this.data1.sender)
  {
    this.boo=false;
  }
  else{
    this.boo=true;
  }
});


  }
  del(i:any)
{
  var pro=prompt("Delete for everyone");
  if(pro=="yes")
  {
    this._auths.object(`messages/${i}`).remove();
  }

}
   sri(message:any)
   {
    this._auths.list("messages").push({
      "sender":this.myname,
      "message":message,
      "Date":this.today
    });
   }
   
  
    

  
  ngOnInit(): void {
  }

}

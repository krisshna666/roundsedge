import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupdetailsComponent } from '../popupdetails/popupdetails.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../firebase.service';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  data:any;

  boo:boolean=false;
  data1:any=[];
  ctx:any;
  ctx1:any;
  
  canvas: any;
  canvas1:any;
  
  @ViewChild('mychart') mychart:any;

  zoom: number = 8;
  constructor(private _pops:MatDialog,private _auths: AngularFireDatabase,private fbs: FirebaseService) {
  
    
  
    this._auths.list("users4").snapshotChanges().subscribe(data => {
     
      let a: any = [];
      data.forEach(v => {
          let b: any = { key: v.key, data: v.payload.val() };
        a.push({ key: b.key, ...b.data });
      });
      // console.log( data.val());
   
      this.data = a;
    });
   }
   
   popsi()
   {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');


     
      var xValues = ["Confirmed","Deaths","TotalRecovered","NewRecovered"];
var yValues = [54,53,12,34];
var barColors = ["red", "green","blue","orange","brown"];

new Chart(this.ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
});

    
   }
   
   Del(i:string,j:string){
     this.fbs.signup(i,j);
  
   }
  ngOnInit(): void {
    
  }

}
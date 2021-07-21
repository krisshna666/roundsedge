import { Component, ElementRef, OnInit, ViewChild,DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Chart,registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
data:any;
canvas: any;
canvas1:any;
ctx: any;

ctx1:any;
@ViewChild('mychart') mychart:any;
@ViewChild('mychart1') mychart1:any;
@ViewChild('sels') sels:any;
@ViewChild('mains') mains:any
countries:any;
  constructor(private _pops:MatDialog,private _auths: AngularFireDatabase,private _https:HttpClient) {
    this._auths.list("users3").snapshotChanges().subscribe(data => {
     
      let a: any = [];
      data.forEach(v => {
          let b: any = { key: v.key, data: v.payload.val() };
        a.push({ key: b.key, ...b.data });
      });
      // console.log( data.val());
   
      this.data = a;
    });
    this._https.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").subscribe(data=>{this.countries=data
    console.log(this.countries);
    
  });

   }
   aftas() {
 
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
// console.log(this.sels.nativeElement.value);
// console.log(this.countries.Countries[0].Country);
    for(var i=0;i<this.countries.regionData.length;i++)
    {
if(this.sels.nativeElement.value.includes(this.countries.regionData[i].region))
{
// console.log(this.countries.Countries[i].TotalConfirmed);
   
     
      var xValues = ["Active","Infected","NewDeceased","NewRecovered"];
var yValues = [this.countries.regionData[i].activeCases,this.countries.regionData[i].newInfected,this.countries.regionData[i].newDeceased,this.countries.regionData[i].newRecovered];
var barColors = ["red", "green","blue","dodgerblue"];

new Chart(this.ctx, {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
});

    }
    
  }
  }


Del(i:any){
  this._auths.list(`users3/${i}`).remove();
}

  ngOnInit(): void {
   
  
  }

}

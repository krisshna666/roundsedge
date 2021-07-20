import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @ViewChild('charts') charts:any; 
data:any=[];
boo:boolean=false;
data1:any=[];
ctx:any;
ctx1:any;

canvas: any;
canvas1:any;

@ViewChild('mychart') mychart:any;
@ViewChild('mychart1') mychart1:any;
@ViewChild('sels') sels:any;
@ViewChild('mains') mains:any
zoom: number = 8;
  
// initial center position for the map
lat: number=10.850516;
lng: number =76.271080;
lat1:any=[];
  constructor(private _http:HttpClient) { 
    
  }

  ngOnInit(): void {
   
   
  

      
    
  }
search(i:any)
{
this._http.get("https://api.openweathermap.org/data/2.5/weather?q="+i+"&appid=2312c3bbb843b61e0b89e0d6a4e9e4df").subscribe((data)=>{this.data1=data});


this.boo=true;
}
}




import { Component, OnInit } from '@angular/core';
import{AngularFireStorage,AngularFireUploadTask,} from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import {finalize} from 'rxjs/operators';
@Component({
  selector: 'app-popupdetails',
  templateUrl: './popupdetails.component.html',
  styleUrls: ['./popupdetails.component.css']
})
export class PopupdetailsComponent implements OnInit {
  file: any;
  charts:any;
  ims="";
  url = '';
  url1:any='';
 sers3:any;
sers2:any;
selectedimage:any=null;

imgSrc:string="";
  isven:boolean=false;
  path:String="";
  basePath = '/images';                       
  downloadableURL:any;           
  constructor(private _auths: AngularFireDatabase,private fs:AngularFireStorage){}
  
task:any;
  ngOnInit(): void {
  }
 
}

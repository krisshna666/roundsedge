import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
lst={
  state:"",
  city:"",
  mintemp:"",
  maxtemp:"",
  cc:""



}
p:number=1;
  data:any;

  constructor(private _auths: AngularFireDatabase) {
   const item: AngularFireList<any>=this._auths.list("users4");
    item.snapshotChanges().subscribe(data => {
     
      let a: any = [];
      data.forEach(v => {
          let b: any = { key: v.key, data: v.payload.val() };
        a.push({ key: b.key, ...b.data });
      });
      // console.log( data.val());
   
      this.data = a;
    });
   }

   add(hg:any){
     this._auths.list("users4").push(this.lst);
   }
Del(af:any)
{
  this._auths.list(`users4/${af}`).remove();
}
  ngOnInit(): void {
  }

}

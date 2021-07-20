import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupdetailsComponent } from '../app/popupdetails/popupdetails.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  colors:boolean=false;
  colors1:boolean=false;
  constructor(private _pops:MatDialog){}
  Slides()
  {
this.colors=!this.colors;
this.colors1=!this.colors1
  }
  popsi()
{
this._pops.open(PopupdetailsComponent,{
 
});
}
}

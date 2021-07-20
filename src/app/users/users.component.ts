import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupdetailsComponent} from '../popupdetails/popupdetails.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private mat:MatDialog,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  popsi(){
    this.mat.open(PopupdetailsComponent);
  }
  list(){
  this.router.navigate(['listings'],{relativeTo:this.route})
  }
  covid(){
    this.router.navigate(['covid'],{relativeTo:this.route})
  }
  trans(){
    this.router.navigate(['translator'],{relativeTo:this.route})
  }
 weather(){
  this.router.navigate(['weather-dashboard'],{relativeTo:this.route})
 }
 log(){
  this.router.navigate(['login']);
 }
}

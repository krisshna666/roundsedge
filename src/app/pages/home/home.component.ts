import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
posts:any=[];
isCollapsed = false;
colors:boolean=false;
colors1:boolean=false;
  constructor(private translateConfigService:TranslateConfigService,private _http:HttpClient) {
    var posts=this._http.get("https://jsonplaceholder.typicode.com/users").subscribe(data=>this.posts=data);
  }
 
changeLang(type:string){
  this.translateConfigService.changeLanguage(type);
}
  ngOnInit(): void {
  }

}

import { Injectable } from "@angular/core";
import {AuthService} from './auth.service';
import {FirebaseService} from './firebase.service'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
Router,
  RouterStateSnapshot,

} from "@angular/router";

import { Observable } from "rxjs";
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: "root"
})
export class TestCanActivate implements CanActivate {
  constructor(private auth:AuthService,private _router:Router){
  
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
if(this.auth.LoggedIn)
{

  return true;
}
   else{

    this._router.navigate(['/login']);
      return false;
   }
  }
}
@Injectable({
  providedIn: "root"
})
export class TestCanDeactivate
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): any {
    return component && component.canDeactivate
      ? component.canDeactivate()
      : true;
  }
}

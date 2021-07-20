import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { TestCanActivate } from './guards';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PopupdetailsComponent } from './popupdetails/popupdetails.component';
import { SignupComponent } from './signup/signup.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsersComponent } from './users/users.component';
import { WeatherComponent } from './weather/weather.component';
const routes: Routes = [
  { path: 'translator',loadChildren:()=>import('./pages/home/home.module').then((m)=>m.HomeModule)},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path:'',redirectTo:'login',pathMatch:'prefix'},
  {path:'chat',component:ChatComponent},
  {path:'popup',component:PopupdetailsComponent},
  {path:'covid-dashboard',component:UserdetailsComponent},
  {path:'weather-dashboard',component:WeatherComponent},
  {path:'adminarena',component:UserlistComponent},
  {path:'administrator',component:AdminComponent},
  {path:'listings',component:UserlistComponent},
  { path: 'login', component: LoginComponent,
  children: [{ path: 'signup', component: SignupComponent } ]},
  { path:'User', component:UsersComponent,children:[ {path:'popup',component:PopupdetailsComponent},
  
  {path:'covid',component:UserdetailsComponent},
  {path:'weather-dashboard',component:WeatherComponent},
  {path:'listings',component:UserlistComponent},
  {path:'translator',component:HomeComponent}]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

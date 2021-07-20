import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from '../home/home.routes';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [HomeComponent],
  exports:[HomeComponent],
  imports: [
    
    CommonModule,
    RouterModule.forChild(HomeRoutes),TranslateModule
  ]
})
export class HomeModule { }

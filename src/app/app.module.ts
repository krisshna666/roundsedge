import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {NzInputModule} from 'ng-zorro-antd/input';
import {SignupComponent} from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import {MatDialogModule} from '@angular/material/dialog';
import{AngularFireStorageModule} from '@angular/fire/storage';
import { PopupdetailsComponent } from './popupdetails/popupdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AuthService } from './auth.service';
import { WeatherComponent } from './weather/weather.component';
import { AdminComponent } from './admin/admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import {} from '@google/maps';
import { UsersComponent } from './users/users.component';
import {DemoMaterialModule} from '../app/material-module';
import {MatMenuModule} from '@angular/material/menu';
declare var google: any;
var firebaseConfig = {
  apiKey: "AIzaSyAVyawKSLQ2K7Sc84liEERd3XpQfh4_5GI",
  authDomain: "simpledb-e21aa.firebaseapp.com",
  databaseURL: "https://simpledb-e21aa-default-rtdb.firebaseio.com",
  projectId: "simpledb-e21aa",
  storageBucket: "simpledb-e21aa.appspot.com",
  messagingSenderId: "187379523045",
  appId: "1:187379523045:web:e349a94e7ea4cca610630c",
  measurementId: "G-N46TLM8H82"
};
registerLocaleData(en);
export function rootLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    PopupdetailsComponent,
    UserdetailsComponent,
    UserlistComponent,
    WeatherComponent,
    AdminComponent,
    UsersComponent
  ],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzButtonModule,
    DemoMaterialModule,
    AgmCoreModule.forRoot({
apiKey:'AIzaSyDTAf8qHlQkf0-kdhBIPaJk0b7rw6wJtW8'
    }),
    NzInputModule,
    NgxPaginationModule,
    AngularFireStorageModule,
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,  
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,

    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:rootLoaderFactory,
        deps:[HttpClient]
      }
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
  
    CommonModule 
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  entryComponents:[PopupdetailsComponent]

})
export class AppModule { }

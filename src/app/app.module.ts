import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './service/api/api.service';
import { HomeService } from './service/home/home.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}from "@angular/forms";
import { RegisterService } from './service/register/register.service';
import { LoginService } from './service/login/login.service';
import { UserdashboardService } from './service/userDashbaord/userdashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserdashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [ApiService,HomeService,RegisterService,LoginService,UserdashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

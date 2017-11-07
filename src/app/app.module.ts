import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards';

import {
  ApiService,
  AuthService,
  ClientService,
} from './services';

import { LoginComponent } from './containers/login/login.component';
import { MainComponent } from './containers/main/main.component';
import { HomeComponent } from './containers/home/home.component';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [
    ApiService,
    AuthService,

    AuthGuard,
    {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

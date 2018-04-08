import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';

import 'hammerjs';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards';

import {
  ApiService,
  AuthService,
} from './services';

import {
  DocumentComponent,
  HomeComponent,
  LoginComponent,
  MainComponent,
} from "./containers";

import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [
    ApiService,
    AuthService,

    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

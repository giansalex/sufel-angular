import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards';

import {
  ApiService,
  AuthService
} from './services';

import { LoginComponent } from './containers/login/login.component';
import { MainComponent } from './containers/main/main.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    AuthService,

    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

import { AppMaterialModule } from '../app-material.module';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from './../shared/shared.module';
import { AuthService } from './services';
import { AuthGuard } from './guards';
import { 
  DashboardComponent,
  LoginComponent,
  MainComponent,
  RegisterComponent,
 } from "./containers";

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,

    AppMaterialModule,
    ClientRoutingModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
  ],
  providers: [
    NbSidebarService,

    AuthService,
    AuthGuard,
  ]
})
export class ClientModule { }

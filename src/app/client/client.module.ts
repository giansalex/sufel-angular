import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Select2Module } from 'ng4-select2';
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbCardModule,
  NbMenuModule,
  NbActionsModule,
} from '@nebular/theme';

import { AppMaterialModule } from '../app-material.module';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from './../shared/shared.module';
import {
  AuthService,
  DocumentService,
  ProfileService
} from './services';

import { AuthGuard } from './guards';
import { 
  DashboardComponent,
  LoginComponent,
  MainComponent,
  ProfileComponent,
  RegisterComponent,
 } from "./containers";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbMenuModule,
    NbActionsModule,
    Ng2SmartTableModule,
    Select2Module,

    AppMaterialModule,
    ClientRoutingModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  providers: [
    NbSidebarService,
    ...NbSidebarModule.forRoot().providers,
    ...NbMenuModule.forRoot().providers,

    AuthService,
    AuthGuard,
    DocumentService,
    ProfileService,
  ]
})
export class ClientModule { }

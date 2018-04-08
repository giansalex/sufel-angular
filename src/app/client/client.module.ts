import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
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
import { AuthService, DocumentService } from './services';
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
    FormsModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbMenuModule,
    NbActionsModule,
    Ng2SmartTableModule,

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
    ...NbSidebarModule.forRoot().providers,
    ...NbMenuModule.forRoot().providers,

    AuthService,
    AuthGuard,
    DocumentService,
  ]
})
export class ClientModule { }

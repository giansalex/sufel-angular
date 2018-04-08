import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './../app-material.module';
import { SharedModule } from '../shared/shared.module';
import { DocumentRoutingModule } from './document-routing.module';
import { AuthGuard } from './guards';
import { AuthService, DocumentService } from './services';
import {
  DocumentComponent,
  LoginComponent,
  MainComponent,
} from "./containers";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    AppMaterialModule,
    DocumentRoutingModule,
    SharedModule,
  ],
  declarations: [
    DocumentComponent,
    LoginComponent,
    MainComponent,
  ],
  providers: [
    AuthGuard,
    AuthService,
    DocumentService,
  ],
})
export class DocumentModule { }

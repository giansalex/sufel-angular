import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './../app-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiService } from "./services/api.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    AppMaterialModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [ApiService]
})
export class SharedModule { }

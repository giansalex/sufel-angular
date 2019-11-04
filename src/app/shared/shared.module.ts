import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './../app-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FileSaverService } from './services';
import { UppercaseDirective } from './directives/uppercase.directive';
import { NumericDirective } from './directives/numeric.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    AppMaterialModule,
  ],
  declarations: [NavbarComponent, UppercaseDirective, NumericDirective],
  exports: [NavbarComponent, UppercaseDirective, NumericDirective],
  providers: [FileSaverService]
})
export class SharedModule { }

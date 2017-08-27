import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
  ]
})
export class AppMaterialModule { }

import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdToolbarModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdToolbarModule,
  ]
})
export class AppMaterialModule { }

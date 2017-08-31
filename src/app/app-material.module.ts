import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdDatepickerModule,
    MdIconModule,
    MdInputModule,
    MdNativeDateModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdDatepickerModule,
    MdIconModule,
    MdInputModule,
    MdNativeDateModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdDatepickerModule,
    MdIconModule,
    MdInputModule,
    MdNativeDateModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdTooltipModule,
  ]
})
export class AppMaterialModule { }

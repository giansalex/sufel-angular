import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
} from "./containers";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'client', loadChildren: 'app/client/client.module#ClientModule'},
  { path: 'document', loadChildren: 'app/document/document.module#DocumentModule'},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

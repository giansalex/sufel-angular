import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';

import {
  MainComponent,
  LoginComponent,
  DocumentComponent
} from "./containers";

const routes: Routes = [
  {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard],
      children:
      [
          { path: '', component: DocumentComponent }
      ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';

import {
  MainComponent,
  LoginComponent,
  HomeComponent
} from "./containers";

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children:
      [
          { path: '', component: HomeComponent }
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

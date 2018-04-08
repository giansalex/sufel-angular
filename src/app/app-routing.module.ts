import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';

import {
  DocumentComponent,
  HomeComponent,
  LoginComponent,
  MainComponent,
} from "./containers";

const routes: Routes = [
  {
      path: 'document',
      component: MainComponent,
      canActivate: [AuthGuard],
      children:
      [
          { path: '', component: DocumentComponent }
      ]
  },
  { path: '', component: HomeComponent },
  { path: 'document/login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

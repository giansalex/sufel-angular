import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';
import { 
  DashboardComponent,
  LoginComponent,
  MainComponent,
  RegisterComponent,
} from "./containers";
import { ProfileComponent } from './containers/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent},
      { path: 'perfil', component: ProfileComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

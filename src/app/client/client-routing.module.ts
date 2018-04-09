import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards';
import { 
  DashboardComponent,
  LoginComponent,
  MainComponent,
  RegisterComponent,
} from "./containers";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent}
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

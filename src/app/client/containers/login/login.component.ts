import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loading = false;
  client: any = {};

  constructor(
    private auth: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.auth.login(this.client)
    .subscribe(r => {
      this.router.navigate(['/client']);
    }, er => {
      this.handleError(er);
    })
    .add(() => this.loading = false);
  }

  private showError(message: string) {
    this.snackBar.open(message, 'ACEPTAR', {
      duration: 2000,
    });
  }

  private handleError(er) {
    if (er.error!.message) {
      this.showError(er.error.message);
      return;
    }
    this.showError('Credenciales inváidas');
  }
}

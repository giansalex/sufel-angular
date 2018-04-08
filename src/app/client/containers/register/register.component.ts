import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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


  register() {
    if (this.client.password != this.client.repeat_password) {
      this.showError('Las contraseñas no coinciden.');
    }

    this.loading = true;
    this.auth.register(this.client)
    .subscribe(r => {
      this.router.navigate(['/client/login']);
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
    if (er.error && er.error.message) {
      this.showError(er.error.message);
      return;
    }
    this.showError('Datos incorrectos');
  }
}

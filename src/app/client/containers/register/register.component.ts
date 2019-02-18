import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('clientForm') form: NgForm;
  hide = true;
  loading = false;
  client: any = {};
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }


  register() {
    if (!this.form.valid) {
      return;
    }

    if (this.client.password !== this.client.repeat_password) {
      this.setError('Las contraseñas no coinciden.');
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

  private setError(message: string) {
    this.error = message;
  }

  private handleError(er) {
    if (er.error && er.error.message) {
      this.setError(er.error.message);
      return;
    }
    this.setError('Datos incorrectos');
  }
}

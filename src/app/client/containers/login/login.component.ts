import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  login() {
    if (!this.form.valid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.client)
    .subscribe(r => {
      this.router.navigate(['/client']);
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
    this.setError('Credenciales inválidas');
  }
}

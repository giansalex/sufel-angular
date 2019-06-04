import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  @ViewChild('clientForm', { static: false }) form: NgForm;
  hide = true;
  loading = false;
  client: any = {};
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  login() {
    this.setError('');

    if (!this.form.valid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.client)
    .subscribe(() => {
      this.router.navigate(['/client']);
    }, er => {
      this.handleError(er);
    })
    .add(() => {
      this.loading = false;
      this.ref.detectChanges();
    });
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasCompany = false;
  loading = false;
  maxDate = new Date();
  doc: any = {};
  logo= environment.logo;
  tipoDocs = [
    {value: '01', viewValue: 'Factura'},
    {value: '03', viewValue: 'Boleta'},
    {value: '07', viewValue: 'Nota de Crédito'},
    {value: '08', viewValue: 'Nota de Débito'}
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (environment.ruc) {
      this.hasCompany = true;
      this.doc.emisor = environment.ruc;
    }
  }

  consult() {
    this.loading = true;
    this.auth.login(this.doc)
    .subscribe(r => {
      this.router.navigate(['/']);
    }, er => this.showError('No se encontro resultados.'))
    .add(() => this.loading = false);
  }

  showError(message: string) {
    this.snackBar.open(message, 'ACEPTAR', {
      duration: 2000,
    });
  }
}

import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { environment } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpainDateAdapter } from '../../adapter/SpainDateAdapter';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{provide: DateAdapter, useClass: SpainDateAdapter}],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  @ViewChild('docForm') docForm: NgForm;
  hasCompany = false;
  loading = false;
  maxDate = new Date();
  doc: any = {};
  logo = environment.logo;
  tipoDocs = [
    {value: '01', viewValue: 'Factura'},
    {value: '03', viewValue: 'Boleta'},
    {value: '07', viewValue: 'Nota de Crédito'},
    {value: '08', viewValue: 'Nota de Débito'}
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    public snackBar: MatSnackBar,
    private dateAdapter: DateAdapter<Date>,
    private ref: ChangeDetectorRef
  ) {
    this.dateAdapter.setLocale('es');
  }

  ngOnInit() {
    if (environment.ruc) {
      this.hasCompany = true;
      this.doc.emisor = environment.ruc;
    }
    this.doc.tipo = '01';
    this.doc.fecha = new Date();
  }

  consult() {
    if (!this.docForm.valid) {
      return;
    }

    this.loading = true;
    this.auth.login(this.doc)
    .subscribe(
      () => this.router.navigate(['/document']),
      () => this.showError('No se encontro resultados.'))
    .add(() => {
      this.loading = false;
      this.ref.detectChanges();
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'ACEPTAR', {
      duration: 2000,
    });
  }
}

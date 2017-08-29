import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasCompany = false;
  doc: any = {};
  tipoDocs = [
    {value: '01', viewValue: 'Factura'},
    {value: '03', viewValue: 'Boleta'},
    {value: '07', viewValue: 'Nota de Crédito'},
    {value: '08', viewValue: 'Nota de Débito'}
  ];

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (environment.company) {
      this.hasCompany = true;
      this.doc.emisor = environment.company;
    }
  }

  consult() {
    this.auth.login({emisor: environment.company})
    .subscribe(r => {
      this.router.navigate(['/']);
    }, er => alert('Invalid Credentials'));
  }
}

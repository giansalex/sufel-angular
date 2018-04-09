import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  company= environment.company;
  companyUrl = environment.companyUrl;
  product= environment.product;
  logo= environment.logo;

}

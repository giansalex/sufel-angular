import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../../services';

const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/client/',
    home: true,
  },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  menu = MENU_ITEMS;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientService, AuthService } from '../../services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private client: ClientService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ApiService } from './../../shared/services';

@Injectable()
export class AuthService {
  private JWT_KEY = 'SUFEL_USER';
  private JWT: any;
  private authUri = '/api/document/auth';

  constructor(
   private router: Router,
   private api: ApiService
  ) {
    const jwt = window.localStorage.getItem(this.JWT_KEY);
    if (jwt) {
        this.setJwt(JSON.parse(jwt));
    }
  }

  setJwt(jwt: any) {
    window.localStorage.setItem(this.JWT_KEY, JSON.stringify(jwt));
    this.JWT = jwt;
    this.api.setHeaders({
        Authorization: `Bearer ${jwt.token}`
    });
  }

  isAuthorized(): boolean {
    if (!Boolean(this.JWT)) {
      return false;
    }
    const expire = new Date(this.JWT.expire * 1000);

    return expire > new Date();
  }

  login(credencial: any) {
    return this.api.post(this.authUri, credencial)
          .do(res => this.setJwt(res))
          .do(res => res);
  }

  signOut() {
    window.localStorage.removeItem(this.JWT_KEY);
    this.JWT = null;
    this.router.navigate(['/document/login']);
  }
}

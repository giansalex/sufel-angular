import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/services';

@Injectable()
export class AuthService {
  private JWT_KEY = 'SUFEL_CLIENT';
  private JWT: any;
  private loginUri = '/api/client/login';
  private registerUri = '/api/client/register';
  ruc: any;

  constructor(
   private router: Router,
   private api: ApiService
  ) {
    const jwt = window.localStorage.getItem(this.JWT_KEY);
    if (jwt) {
        this.setJwt(JSON.parse(jwt));
    }
  }

  private setJwt(jwt: any) {
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

  /**
   * login user
   */
  login(credencial: any) {
    this.ruc = credencial.documento;
    return this.api.post(this.loginUri, credencial)
          .do(res => this.setJwt(res));
  }

  /**
   * register new user
   */
  register(credencial: any) {
    return this.api.post(this.registerUri, credencial);
  }
  
  signOut() {
    window.localStorage.removeItem(this.JWT_KEY);
    this.JWT = null;
    this.router.navigate(['/client/login']);
  }
}

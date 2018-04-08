import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [ApiService, AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  // it('login user', inject([AuthService], (service: AuthService) => {
  //   service.login({
  //     emisor: '20000000003',
  //     documento: 'F001-00000001',
  //     tipo: '01',
  //     fecha: '2017-11-07',
  //     total: 236
  //   }).subscribe(r => {
  //     expect(r.token).toBeTruthy();
  //   });
  // }));
});

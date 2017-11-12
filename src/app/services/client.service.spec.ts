import { TestBed, inject } from '@angular/core/testing';

import { ClientService } from './client.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ApiService, ClientService]
    });
  });

  it('should be created', inject([ClientService], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));
});

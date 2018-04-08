import { TestBed, inject } from '@angular/core/testing';

import { DocumentService } from './document.service';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('DocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ApiService, DocumentService]
    });
  });

  it('should be created', inject([DocumentService], (service: DocumentService) => {
    expect(service).toBeTruthy();
  }));
});

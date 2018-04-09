import { TestBed, inject } from '@angular/core/testing';

import { DocumentService } from './document.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../shared/services';

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

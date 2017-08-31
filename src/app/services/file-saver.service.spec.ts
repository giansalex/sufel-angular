import { TestBed, inject } from '@angular/core/testing';

import { FileSaverService } from './file-saver.service';

describe('FileSaverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileSaverService]
    });
  });

  it('should be created', inject([FileSaverService], (service: FileSaverService) => {
    expect(service).toBeTruthy();
  }));
});

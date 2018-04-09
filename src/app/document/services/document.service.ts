import { Injectable } from '@angular/core';
import { ApiService } from './../../shared/services';

@Injectable()
export class DocumentService {

  constructor(
    private api: ApiService
  ) {}

  getInfo() {
    return this.api.get('/api/document/resource/info');
  }

  getXml() {
    return this.api.getFile('/api/document/resource/xml');
  }

  getPdf() {
    return this.api.getFile('/api/document/resource/pdf');
  }
}

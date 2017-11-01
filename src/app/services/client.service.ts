import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ClientService {

  constructor(
    private api: ApiService
  ) {}

  getInfo() {
    return this.api.get('/api/client/document/info');
  }

  getXml() {
    return this.api.getFile('/api/client/document/xml');
  }

  getPdf() {
    return this.api.getFile('/api/client/document/pdf');
  }
}

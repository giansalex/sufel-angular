import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';

@Injectable()
export class DocumentService {
  
  constructor(
    private api: ApiService
  ) {}

  filter(filtro: any) {
    return this.api.post('/api/client/documents', filtro);
  }

  getInfo(id) {
    return this.api.get(this.createUrl(id, 'info'));
  }

  getXml(id) {
    return this.api.getFile(this.createUrl(id, 'xml'));
  }

  getPdf(id) {
    return this.api.getFile(this.createUrl(id, 'pdf'));
  }

  getCompanies() {
    return this.api.get('/api/client/companies');
  }

  private createUrl(id, type: string) {
    return `/api/client/documents/${id}/resource/${type}`;
  }
}

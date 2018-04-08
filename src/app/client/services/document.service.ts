import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';

@Injectable()
export class DocumentService {
  
  constructor(
    private api: ApiService
  ) {}

  getInfo(id: number) {
    return this.api.get(this.createUrl(id, 'info'));
  }

  getXml(id: number) {
    return this.api.getFile(this.createUrl(id, 'xml'));
  }

  getPdf(id: number) {
    return this.api.getFile(this.createUrl(id, 'pdf'));
  }

  private createUrl(id: number, type: string) {
    return `/api/client/documents/${id}/resource/${type}`;
  }
}

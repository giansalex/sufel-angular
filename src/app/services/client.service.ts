import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class ClientService {

  constructor(
    private api: ApiService
  ) {}

  getDocument(query: string) {
    return this.api.get('/api/client/document?query=' + query);
  }
}

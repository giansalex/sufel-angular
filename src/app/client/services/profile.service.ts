import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services';

@Injectable()
export class ProfileService {

  constructor(
    private api: ApiService
  ) {}

  changePassword(data) {
    return this.api.post('/api/client/change-password', data);
  }
}

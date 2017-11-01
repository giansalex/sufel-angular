import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  private apiEndpoint = environment.endpoint;

  headers= new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
  });
  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    return this.http.get(
            `${this.apiEndpoint}${path}`,
            {headers: this.headers}
    );
  }

  post(path, body): Observable<any> {
    return this.http.post(
        `${this.apiEndpoint}${path}`,
        JSON.stringify(body),
        { headers : this.headers}
    );
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${this.apiEndpoint}${path}`,
    { headers: this.headers});
  }

  setHeaders(headers) {
    Object.keys(headers)
    .forEach(header => this.headers = this.headers.set(header, [headers[header]]));
  }
}

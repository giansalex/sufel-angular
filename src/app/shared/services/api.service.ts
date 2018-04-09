import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  private apiEndpoint = environment.endpoint;

  headers= new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
  });
  constructor(private http: HttpClient) { }

  private handleError<T> () {
    return (error: any): Observable<T> => {
      console.error(error);
      // this.log(`${operation} failed: ${error.message}`);
      throw error;
    };
  }

  get(path: string): Observable<any> {
    return this.http.get(
            `${this.apiEndpoint}${path}`,
            {headers: this.headers}
    ).pipe(
      catchError(this.handleError())
    );
  }

  getFile(path: string): Observable<Blob> {
    return this.http.get(
            `${this.apiEndpoint}${path}`,
            {headers: this.headers, responseType: 'blob', observe: 'response'}
    )
    .pipe(
      map(r => {
        const options = {};
        if (r.headers.has('content-type')) {
          options['type'] = r.headers.get('content-type');
        }
        return new Blob([r.body], options);
      }),
      catchError(this.handleError<Blob>())
    );
  }

  post(path, body): Observable<any> {
    return this.http.post(
        `${this.apiEndpoint}${path}`,
        JSON.stringify(body),
        { headers : this.headers}
    ).pipe(
      catchError(this.handleError())
    );
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${this.apiEndpoint}${path}`,
      { headers: this.headers}
    ).pipe(
      catchError(this.handleError())
    );
  }

  setHeaders(headers) {
    Object.keys(headers)
    .forEach(header => this.headers = this.headers.set(header, [headers[header]]));
  }
}

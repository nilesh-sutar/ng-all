import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  apiUrl: any = environment.apiUrl;

  getCall(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url).pipe(catchError(this.handleError));
  }

  postCall(url: string, body: {}): Observable<any> {
    return this.http
      .post(this.apiUrl + url, body)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    return throwError(error)
  }
}

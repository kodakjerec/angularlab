import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, throwError } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  get(path: string, params?: HttpParams): any {
    return lastValueFrom(
      this.http
        .get(path, { params: params, observe: 'body', responseType: 'json' })
        .pipe(catchError(this.handleError))
    );
  }

  post(path: string, body?: any): any {
    return lastValueFrom(
      this.http
        .post(path, body)
        .pipe(catchError(this.handleError))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

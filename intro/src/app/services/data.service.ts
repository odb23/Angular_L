import { NotFoundError } from './../common/errors/not-found.error';
import { AppError } from './../common/errors/app.error';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BadRequestError } from '../common/errors/bad-request.error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String)private url: string, private http: HttpClient) {}

  getData(): Observable<Object> {
    return this.http.get(this.url).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  create(resource: any): Observable<Object> {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  delete(id: any): Observable<Object> {
    return this.http.delete(this.url + `/${id}`).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  update(resource: any) {
    return this.http
      .patch(this.url + `/${resource.id}`, JSON.stringify({ isRead: true }))
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => {
      if (err.status === 400) {
        return new BadRequestError(JSON.stringify(err));
      } else if (err.status === 404) {
        return new NotFoundError(JSON.stringify(err));
      }

      return new AppError(JSON.stringify(err));
    });
  }
}

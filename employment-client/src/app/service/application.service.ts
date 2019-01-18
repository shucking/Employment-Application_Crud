import { Injectable } from '@angular/core';
import { Application } from '../models/application.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const baseUrl = 'http://localhost:8080/applications'

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  add(application): Observable<Application> {
    const url = `${baseUrl}/save`;
    return this.http.post<Application>(url, application, httpOptions).pipe(
      tap((application: Application) => console.log(`added application with id = ${application.id}`)),
      catchError(this.handleError<Application>('add'))
    );
  }

  getAll (): Observable<Application[]> {
    return this.http.get<Application[]>(baseUrl)
      .pipe(
        tap(heroes => console.log('fetched Applications')),
        catchError(this.handleError('getApplications', []))
      );
  }

  getApplication (id: number): Observable<Application> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Application>(url).pipe(
      tap(_ => console.log(`fetched application id = ${id}`)),
      catchError(this.handleError<Application>(`getApplication id = ${id}`))
    );
  }

  update(application): Observable<any> {
    const url = `${baseUrl}/update`;
    return this.http.put<Application>(url, application, httpOptions).pipe(
      tap(_=> console.log(`updated application id = ${application.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  delete (id): Observable<Application> {
    const url = `${baseUrl}/delete/${id}`;
    return this.http.delete<Application>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted application id = ${id}`)),
      catchError(this.handleError<Application>('delete'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
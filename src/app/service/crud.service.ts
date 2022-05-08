import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Location {
  _id!: String;
  name!: String;
  description!: String;
  max_members!: number;
  address!: String;
  photo_url!: String;

}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API: string = 'http://localhost:8000/api';

  httpHeaders = new   HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }


  AddLocation(data:Location): Observable<any> {
    let API_URL = `${this.REST_API}/add-location`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }


  GetLocations() {
    return this.httpClient.get(`${this.REST_API}`);
  }


  GetLocation(id: any):Observable<any> {
    let API_URL = `${this.REST_API}/read-location/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
      )
  }


  updateLocation(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-location/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }


  deleteLocation(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-location/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

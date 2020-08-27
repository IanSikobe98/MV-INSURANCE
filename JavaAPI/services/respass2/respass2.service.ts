import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Respass2Service {


  nid;
  url;
  constructor(public http: HttpClient) { }
  // https://cors-anywhere.herokuapp.com/

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  resetpass(nid,pass){
    // this.url = 'http://localhost:8081/JavaAPI/gpasswd2?';
    this.url = 'https://cors-anywhere.herokuapp.com/http://ec2-18-217-202-207.us-east-2.compute.amazonaws.com:8080/JavaAPI/gpasswd2?';
      return this.http.get(this.url+'&nid='+nid+'&pass='+pass).pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}

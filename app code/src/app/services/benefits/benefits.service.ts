import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {
  url;
  vehicle='';
  type='';
  amount;
  rate;
  valuation;

  constructor(public http: HttpClient) { }

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


savepol(vehicle,type,amount,rate,valuation){
  // this.url = 'http://localhost:8081/JavaAPI/savepol?';
      this.url = 'https://cors-anywhere.herokuapp.com/http://ec2-18-217-202-207.us-east-2.compute.amazonaws.com:8080/JavaAPI/savepol?';
  return  this.http.get(this.url+'vehicle='+vehicle+'&type='+type+'&amount='+amount+'&rate='+rate+'&valuation='+valuation).pipe(
    retry(2),
    catchError(this.handleError)
  )
}
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Regform1Service {
  url;
  vrno='';
  vhype =' ';
  model =' ';
  YOM  ;
  engine ;
  btype =' ';
  cost ;
  hpc=' ';
  use =' ';
  owid ;
  owfname =' ';
  owsname =' ';
  natid;



  constructor(public http: HttpClient) {}
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


  signmeup(vrno,vhype ,model ,YOM ,engine ,btype,cost,hpc,use, owid ,owfname ,owsname,natid){
    // this.url = 'http://localhost:8081/JavaAPI/vehstore?';
    this.url = 'https://cors-anywhere.herokuapp.com/http://ec2-18-217-202-207.us-east-2.compute.amazonaws.com:8080/JavaAPI/vehstore?';
    return this.http.get(this.url+'vrno='+vrno+'&vhype='+vhype+'&model='+model+'&YOM='+YOM+'&engine='+engine+'&btype='+btype+'&cost='+cost+'&hpc='+hpc+'&use='+use+'&owid='+owid+'&owfname='+owfname+'&owsname='+owsname+'&natid='+natid).pipe(
      retry(2),
      catchError(this.handleError)
    )
}
}

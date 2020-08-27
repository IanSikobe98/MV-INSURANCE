import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileupService {

  url; 
  pno;
  fna='';
  mna='';
  sna='';
  nid;
  gen='';
  pa='';
  poa='';
  ga=''; 
  occ='';  
  town='';  
  dob=''; 
  pass=''; 
  nid2;

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


update(pno,fna,mna,sna,nid,gen,pa,poa,ga,occ,town,dob,nid2){
  // this.url = 'http://localhost:8081/JavaAPI/updatepro?';
  this.url = 'https://cors-anywhere.herokuapp.com/http://ec2-18-217-202-207.us-east-2.compute.amazonaws.com:8080/JavaAPI/updatepro?';
  return this.http.get(this.url+'pno='+pno+'&fna='+fna+'&mna='+mna+'&sna='+sna+'&nid='+nid+'&gen='+gen+'&pa='+pa+'&poa='+poa+'&ga='+ga+'&occ='+occ+'&town='+town+'&dob='+dob+'&nid2='+nid2).pipe(
    retry(2),
    catchError(this.handleError)
  )
}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Savepay2Service {

  url;
  polno;
  amount;
  transno="";
  
    constructor(public http: HttpClient) {}
    paysave2(polno,amount,transno){
      // this.url = 'http://localhost:8081/JavaAPI/paysave2?';
      this.url = 'https://cors-anywhere.herokuapp.com/http://ec2-18-217-202-207.us-east-2.compute.amazonaws.com:8080/JavaAPI/paysave2?';
      return this.http.get(this.url+'polno='+polno+'&amount='+amount+'&transno='+transno);
    }
  }
  
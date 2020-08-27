import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayserviceService {
  url;
  polno='';
  amount;
  pno;
  

  constructor(public http: HttpClient) {}

  pay2(polno,amount,pno){
    // this.url = 'http://ianapu.000webhostapp.com/stk_initiate.php?';
    this.url = 'https://cors-anywhere.herokuapp.com/http://ianapu.000webhostapp.com/stk_initiate.php?';
    // this.url = 'https://cors-anywhere.herokuapp.com/http://ec2-18-219-235-103.us-east-2.compute.amazonaws.com/stk_initiate.php?';
    return  this.http.get(this.url+'polno='+polno+'&pno='+pno+'&amount='+amount);
  }
}

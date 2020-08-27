import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayconfService {
url;
mid;
  constructor(public http: HttpClient) { }

  conf(mid){
    // this.url = 'http://ianapu.000webhostapp.com/receive.php?f=stkPushCallbackResponse';
    // this.url = 'http://ianapu.000webhostapp.com/new.php?'
    this.url = 'https://cors-anywhere.herokuapp.com/http://ianapu.000webhostapp.com/new.php?'
    
      //  this.url = 'https://cors-anywhere.herokuapp.com/http://ec2-18-219-235-103.us-east-2.compute.amazonaws.com/new.php?'
    return  this.http.get(this.url+'mid='+mid);}

}

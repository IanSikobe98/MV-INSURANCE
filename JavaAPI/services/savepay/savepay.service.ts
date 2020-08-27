import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavepayService {
url;
polno;
amount;

  constructor(public http: HttpClient) {}
  paysave(polno,amount){
    this.url = 'http://localhost:8081/JavaAPI/paysave?';
    return this.http.get(this.url+'polno='+polno+'&amount='+amount);
  }
}

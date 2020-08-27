import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaitService {

  constructor() { }

  waitline(){
    return new Promise((resolve,reject) => {
      setTimeout(()  => {
        resolve("wait");
      },200);
      })
    }
}

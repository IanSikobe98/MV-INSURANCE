import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
f1=" ";
f2=" ";
f3=" ";
valarr: {

  valfull:number;
  valf1:number;
  valf2:number
}

  constructor() { }

  validation(f1){
    
if(f1==" "){
  this.valarr.valf1=1;

}
else if(f1!=" "){this.valarr.valf1=0}
return this.valarr.valf1;
}
  validation2(f2){
    if(f2==" "){
      this.valarr.valf1=1;
    }
    else if(f2!=" "){this.valarr.valf1=0}
    return this.valarr.valf2;   
  }

validationfull(f1,f2){
  this.valarr.valf1=this.validation(f1);
  this.valarr.valf2 = this.validation2(f2);

  if(this.valarr.valf1==1 || this.valarr.valf2==1)
  {
    this.valarr.valfull=1;
   
  }
  else if(this.valarr.valf1==0 && this.valarr.valf2==0){
    this.valarr.valfull=0;

  }
  return this.valarr;
}
}

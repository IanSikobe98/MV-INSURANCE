import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SignupService } from '../services/signup/signup.service';
import { Storage } from '@ionic/storage'
import { PopoverController} from '@ionic/angular';
import { Platform,LoadingController } from '@ionic/angular';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';

import { Popduplic2Page } from '../popduplic2/popduplic2.page';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  pno : number;
  fna : string;
  mna : string;
  sna : string;
  nid : number;
  gen : string;
  pa : string;
  poa : string;
  ga : string; 
  occ : string;  
  town : string;  
  dob : string; 
  pass : string; 

  status: {
    status:'',
    message:''
  }

  user:{
    pno : number;
    fna : string;
    mna : string;
    sna : string;
    nid : number;
    gen : string;
    pa : string;
    poa : string;
    ga : string; 
    occ : string;  
    town : string;  
    dob : string; 
    pass : string; 
  }


  valarr: {

    valfull:number;
    valf1:number;
    valf2:number;
    valf3:number;
    valf4:number;
    valf5:number;
    valf6:number;
    valf7:number;
    valf8:number;
    valf9:number;
    valf10:number;
    valf11:number;
    valf12:number;
    valf13:number;

  }
  valnew: { valfull: number; valf1: number; valf2: number;  valf3: number; valf4: number; valf5: number; valf6: number;valf7: number;valf8: number; valf9: number; valf10: number;valf11: number;valf12: number;valf13: number;};
  f1l: number;
  f2l: number;
  f3l: number;
  f4l: number;
  f5l: number;
  f6l: number;
  f7l: number;
  f8l: number;
  f9l: number;
  f10l: number;
  f11l: number;
  f12l: number;
  f13l: number;


  testf1l: any;






  constructor(private  LoadingService : LoadingService ,public LoadingController:LoadingController,private popover:PopoverController,public storage:Storage,public navCtrl: NavController, private SignupService:SignupService) { 
    this.pno;
    this.fna='';
    this.mna='';
    this.sna='';
    this.nid;
    this.gen='';
    this.pa='';
    this.poa='';
    this.ga=''; 
    this.occ='';  
    this.town='';  
    this.dob=''; 
    this.pass=''; 

    this.status = {
      status: '',
      message: ''
    };


this.valarr= {

      valfull:0,
      valf1:0,
      valf2:0,
      valf3:0,
      valf4:0,
      valf5:0,
      valf6:0,
      valf7:0,
      valf8:0,
      valf9:0,
      valf10:0,
      valf11:0,
      valf12:0,
      valf13:0
      

    };

  }


  signup(){
    this.user = {
      pno : this.pno,
      fna : this.fna,
      mna : this.mna,
      sna : this.sna,
      nid : this.nid,
      gen : this.gen,
      pa : this.pa,
      poa : this.poa,
      ga : this.ga,
      occ : this.occ,  
      town : this.town, 
      dob : this.dob,
      pass : this.pass 
    }

    this.valnew =this.validationfull(this.user.pno,this.user.fna,this.user.mna,this.user.sna,this.user.nid,this.user.gen,this.user.pa,this.user.poa,this.user.ga,this.user.occ,this.user.town,this.user.dob,this.user.pass);
this.valarr.valf1=this.valnew.valf1;
this.valarr.valf2=this.valnew.valf2;
this.valarr.valf3=this.valnew.valf3;
this.valarr.valf4=this.valnew.valf4;
this.valarr.valf5=this.valnew.valf5;
this.valarr.valf6=this.valnew.valf6;
this.valarr.valf7=this.valnew.valf7;
this.valarr.valf8=this.valnew.valf8;
this.valarr.valf9=this.valnew.valf9;
this.valarr.valf10=this.valnew.valf10;
this.valarr.valf11=this.valnew.valf11;
this.valarr.valf12=this.valnew.valf12;
this.valarr.valf13=this.valnew.valf13;
this.valarr.valfull=this.valnew.valfull; 
console.log(this.valarr);



if(this.valnew.valfull==0){
  this.LoadingService.present("Saving Details....");


    this.SignupService.signup(this.user.pno,this.user.fna ,this.user.mna ,this.user.sna ,this.user.nid ,this.user.gen,this.user.pa 
      ,this.user.poa,this.user.ga ,this.user.occ ,this.user.town,this.user.dob,this.user.pass).subscribe((status:any) => {
      console.log(status);

      if(status){
              if(status.status == true){
                  this.navCtrl.navigateForward('');
                  this.LoadingService.dismiss();
                  
               }

               if(status.status != true){
                this.LoadingService.dismiss();
                this.popover.create({component:Popduplic2Page,showBackdrop:false}).then((popoverElement)=>{
                  popoverElement.present();        })                 }
      }
    }
    ,
    // (err) => console.log("Error Loging In:", JSON.parse(err._body).description),
    () => { 
      this.LoadingService.dismiss();
      console.log("error")
    this.popover.create({component:PopoverserverPage,showBackdrop:false}).then((popoverElement)=>{
      popoverElement.present();
    })
  }

    );
  }
  else if(this.valnew.valfull!=0)
    {
      console.log("try again");
    }

 }

  login(){
    this.navCtrl.navigateForward('');
  }

  validation(f1){
    

    if(f1!=undefined){
      this.f1l=this.pno.toString().length
      console.log(this.pno.toString());
      console.log(this.pno.toString().search(/\./));
      console.log(this.pno.toString().search(/\-/));
    if(this.f1l==0 || this.f1l>9 || this.f1l<9 || this.pno.toString().search(/\./)!=-1 || this.pno.toString().search(/\-/)!=-1){
      this.valarr.valf1=1;
    
    }
    else if(this.f1l!==0 && this.f1l==9 && this.pno.toString().search(/\./)==-1){this.valarr.valf1=0} }
else{this.valarr.valf1=1 }
    
    return this.valarr.valf1;
    }


  validation2(f2){
    this.f2l=this.fna.length;
    console.log(this.f2l=this.fna.length);
    this.testf1l =/^[a-zA-Z-]+$/.test(this.fna);
    console.log(/^[a-zA-Z-]+$/.test(this.fna));
    if(this.f2l== 0  || this.testf1l==false){
      this.valarr.valf2=1;
    }
    else if(this.f2l!=0 && this.testf1l==true){this.valarr.valf2=0}
    return this.valarr.valf2;   
  }

  validation3(f3){
    this.f3l=this.mna.length;
    console.log(this.f3l=this.mna.length);
    this.testf1l =/^[a-zA-Z-]+$/.test(this.mna);
    console.log(/^[a-zA-Z-]+$/.test(this.mna));
    if(this.f3l== 0  || this.testf1l==false){
      this.valarr.valf3=1;
    }
    else if(this.f3l!=0 && this.testf1l==true){this.valarr.valf3=0}
    return this.valarr.valf3;   
  }

  validation4(f4){
    this.f4l=this.sna.length;
    console.log(this.f4l=this.sna.length);
    this.testf1l =/^[a-zA-Z-]+$/.test(this.sna);
    console.log(/^[a-zA-Z-]+$/.test(this.sna));
    if(this.f4l== 0  || this.testf1l==false){
      this.valarr.valf4=1;
    }
    else if(this.f4l!=0 && this.testf1l==true){this.valarr.valf4=0}
    return this.valarr.valf4;   
  }

  validation5(f5){
    

    if(f5!=undefined){
      this.f5l=this.nid.toString().length
      this.testf1l =/^[0-9]+$/.test(this.nid.toString());
      console.log(this.testf1l);
      console.log(this.nid.toString());
      console.log(this.nid.toString().search(/\./));
      console.log(this.nid.toString().search(/\-/));
    if(this.f5l==0 || this.f5l>10  || this.nid.toString().search(/\./)!=-1 || this.nid.toString().search(/\-/)!=-1){
      this.valarr.valf5=1;
    
    }
    else if(this.f5l!==0 && this.f5l<=10 && this.nid.toString().search(/\./)==-1){this.valarr.valf5=0} }
else{this.valarr.valf5=1 }
    
    return this.valarr.valf5;
    }

    validation6(f6){
      this.f6l=this.gen.length;
      console.log(this.f6l=this.gen.length);
      if(this.f6l== 0){
        this.valarr.valf6=1;
      }
      else if(this.f6l!=0){this.valarr.valf6=0}
      return this.valarr.valf6;   
    }
    validation7(f7){
      this.f7l=this.pa.length;
      console.log(this.f7l=this.pa.length);
      if(this.f7l== 0){
        this.valarr.valf7=1;
      }
      else if(this.f7l!=0){this.valarr.valf7=0}
      return this.valarr.valf7;   
    }



    validation8(f8){
      this.f8l=this.poa.length;
      console.log(this.f8l=this.poa.length);
      if(this.f8l== 0){
        this.valarr.valf8=1;
      }
      else if(this.f8l!=0){this.valarr.valf8=0}
      return this.valarr.valf8;   
    }
    validation9(f9){
      this.f9l=this.ga.length;
      console.log(this.f9l=this.ga.length);
      if(this.f9l== 0){
        this.valarr.valf9=1;
      }
      else if(this.f9l!=0){this.valarr.valf9=0}
      return this.valarr.valf9;   
    }
    validation10(f10){
      this.f10l=this.occ.length;
      console.log(this.f10l=this.occ.length);
      if(this.f10l== 0){
        this.valarr.valf10=1;
      }
      else if(this.f10l!=0){this.valarr.valf10=0}
      return this.valarr.valf10;   
    }
    validation11(f11){
      this.f11l=this.town.length;
      console.log(this.f11l=this.town.length);
      if(this.f11l== 0){
        this.valarr.valf11=1;
      }
      else if(this.f11l!=0){this.valarr.valf11=0}
      return this.valarr.valf11;   
    }

    validation12(f12){
      this.f12l=this.dob.length;
      console.log(this.f12l=this.dob.length);
      if(this.f12l== 0){
        this.valarr.valf12=1;
      }
      else if(this.f12l!=0){this.valarr.valf12=0}
      return this.valarr.valf12;   
    }

    validation13(f13){
      this.f13l=this.pass.length;
      console.log(this.f13l=this.pass.length);
      if(this.f13l== 0){
        this.valarr.valf13=1;
      }
      else if(this.f13l!=0){this.valarr.valf13=0}
      return this.valarr.valf13;   
    }
  

    validationfull(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13){
      this.valarr.valf1=this.validation(f1);
      this.valarr.valf2 = this.validation2(f2);
      this.valarr.valf3 = this.validation3(f3);
      this.valarr.valf4 = this.validation4(f4);
      this.valarr.valf5 = this.validation5(f5);
      this.valarr.valf6 = this.validation6(f6);
      this.valarr.valf7 = this.validation7(f7);
      this.valarr.valf8 = this.validation8(f8);
      this.valarr.valf9=this.validation9(f9);
      this.valarr.valf10 = this.validation10(f10);
      this.valarr.valf11 = this.validation11(f11);
      this.valarr.valf12 = this.validation12(f12);
      this.valarr.valf13 = this.validation13(f13);
    
      if(this.valarr.valf1==1 || this.valarr.valf2==1 || this.valarr.valf3==1 || this.valarr.valf4==1|| this.valarr.valf5==1 || this.valarr.valf6==1 || this.valarr.valf7==1|| this.valarr.valf8==1 || this.valarr.valf9==1 || this.valarr.valf10==1 || this.valarr.valf11==1 || this.valarr.valf12==1 || this.valarr.valf13==1)
      {
        this.valarr.valfull=1;
       
      }
      else if(this.valarr.valf1==0 && this.valarr.valf2==0 && this.valarr.valf3==0 && this.valarr.valf4==0 && this.valarr.valf5==0 && this.valarr.valf6==0 && this.valarr.valf7==0 && this.valarr.valf8==0 && this.valarr.valf9==0 && this.valarr.valf10==0  && this.valarr.valf11==0&& this.valarr.valf12==0 && this.valarr.valf13==0){
        this.valarr.valfull=0;
    
      }
      return this.valarr;
    }
    





  ngOnInit() {
  }

}

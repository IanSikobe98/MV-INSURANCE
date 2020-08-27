import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { DrivformService } from '../services/drivform/drivform.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { NavigationExtras } from '@angular/router'
import { PopoverController} from '@ionic/angular';
import { Platform,LoadingController } from '@ionic/angular';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-drivform',
  templateUrl: './drivform.page.html',
  styleUrls: ['./drivform.page.scss'],
})

export class DrivformPage implements OnInit {

  lno :string
  exp : number
  odr : string
  sick : string
  con : string
  ldate : string
  acc : string
  inc : string
  pr : string
  pr1 : string
  pr2 : string




data2 : any
veh1 : any
ian :any
  status: {
    status:'',
    message:''
  }


  driv:{

    lno :string
    exp : number
    odr : string
    sick : string
    con : string
    ldate : string
    acc : string
    inc : string
    pr : string
    pr1 : string
    pr2 : string
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


  }
  valnew: { valfull: number; valf1: number; valf2: number;  valf3: number; valf4: number; valf5: number; valf6: number;valf7: number;valf8: number; valf9: number; valf10: number;valf11: number;};
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
  testf1l: boolean;



  constructor(private  LoadingService : LoadingService ,public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController, private DrivformService:DrivformService,private route: ActivatedRoute,private router: Router) { 
    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.veh1 = JSON.parse(params.veh);
      console.log(this.veh1);
      console.log(this.veh1.regno);
      
      
      
      })
   
   
    this.lno ='';
    this.exp;
    this.odr=  '';
    this.sick ='';
    this.con ='';
    this.ldate ;
    this.acc ='';
    this.inc ='';
    this.pr ='';
    this.pr1 ='';
    this.pr2 ='';

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
  valf11:0


};

}

  async filldriv(){
 
  this.driv = {
  lno : this.lno,
  exp : this.exp,
  odr  : this.odr,
  sick : this.sick,
  con : this.con,
  ldate : this.ldate,
  acc : this.acc,
  inc : this.inc,
  pr : this.pr,
  pr1 : this.pr1,
  pr2 : this.pr2

  }

  this.route.queryParams.subscribe(params =>{
    console.log('params: ', params);
    
    this.veh1 = JSON.parse(params.veh);
    console.log(this.veh1);
    console.log(this.veh1.use);
    
    
    
    })

    this.valnew =this.validationfull(this.driv.lno,this.driv.exp,this.driv.inc,this.driv.odr,this.driv.sick,this.driv.con,this.driv.ldate,this.driv.acc,this.driv.pr,this.driv.pr1,this.driv.pr2);
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

    this.valarr.valfull=this.valnew.valfull; 
    console.log(this.valarr);
    
    if(this.valnew.valfull==0){
      // this.LoadingController.create({
      //   message:" Getting Insurance policies ....."
      //  }).then((loadingElement)=>{
      //    loadingElement.present();
      //     var ref = this;
      //     setTimeout(function()
      //     {
      //       ref.LoadingController.dismiss();
      //     },5000)
      //   })


      // const loading = await this.LoadingController.create({
      //   message: 'Getting Insurance Policies...',
      //   duration: 200
      // });
      // await loading.present();
  
      // const { role, data } = await loading.onDidDismiss();
      // console.log('Loading dismissed!');

      this.LoadingService.present("Getting Policies....");

      this.DrivformService.getamounts(this.driv.lno,this.driv.exp,this.driv.odr,this.driv.sick,this.driv.con,this.driv.ldate,this.driv.acc,this.driv.inc,this.driv.pr,this.driv.pr1,this.driv.pr2,this.veh1.vrno,this.veh1.cost,this.veh1.use).subscribe((status:any) => {
    console.log(status);
    console.log(status.data);


    console.log(status.data.choices);         
    console.log(status.data.choices[0].type);       
    this.data2 =status;
    
    let navigationExtras : NavigationExtras = {
      queryParams:{
      veh :JSON.stringify(this.data2),
      
      
      }}

      if(status){
        if(status.status == true){
            this.router.navigate(['/policies'],navigationExtras);
            this.LoadingService.dismiss();
         }
  
         if(status.status != true){
            this.navCtrl.navigateForward('/tab2'); 
            this.LoadingService.dismiss();              }
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



validation(f1){
  this.f1l=this.lno.length;
  console.log(this.f1l=this.lno.length);
  this.testf1l =/^[a-zA-Z0-9]+$/.test(this.lno);
  console.log(/^[a-zA-Z0-9]+$/.test(this.lno));
  if(this.f1l== 0 || this.f1l>10  || this.testf1l==false){
    this.valarr.valf1=1;
  }
  else if(this.f1l!=0 && this.testf1l==true && this.f1l<=10 ){this.valarr.valf1=0}
  return this.valarr.valf1;   
}
 validation2(f2){
  

  if(f2!=undefined){
    this.f2l=this.exp.toString().length
    console.log(this.exp.toString());
    console.log(this.exp.toString().search(/\./));
    console.log(this.exp.toString().search(/\-/));
  if(this.f2l==0 || this.f2l>10 ||  this.exp.toString().search(/\./)!=-1 || this.exp.toString().search(/\-/)!=-1){
    this.valarr.valf2=1;
  
  }
  else if(this.f2l!==0 && this.f2l<=10 && this.exp.toString().search(/\./)==-1){this.valarr.valf2=0} }
else{this.valarr.valf2=1 }
  
  return this.valarr.valf2;
  }

  validation3(f3){
    this.f3l=this.inc.length;
    console.log(this.f3l=this.inc.length);
    if(this.f3l== 0){
      this.valarr.valf3=1;
    }
    else if(this.f3l!=0){this.valarr.valf3=0}
    return this.valarr.valf3;   
  }
  validation4(f4){
    this.f4l=this.odr.length;
    console.log(this.f4l=this.odr.length);
    if(this.f4l== 0){
      this.valarr.valf4=1;
    }
    else if(this.f4l!=0){this.valarr.valf4=0}
    return this.valarr.valf4;   
  }

  validation5(f5){
    this.f5l=this.sick.length;
    console.log(this.f5l=this.sick.length);
    if(this.f5l== 0){
      this.valarr.valf5=1;
    }
    else if(this.f5l!=0){this.valarr.valf5=0}
    return this.valarr.valf5;   
  }

  validation6(f6){
    this.f6l=this.con.length;
    console.log(this.f6l=this.con.length);
    if(this.f6l== 0){
      this.valarr.valf6=1;
    }
    else if(this.f6l!=0){this.valarr.valf6=0}
    return this.valarr.valf6;   
  }
  validation7(f7){
    if(f7!=undefined){
    this.f7l=this.ldate.length;
    console.log(this.f7l=this.ldate.length);
    if(this.f7l== 0){
      this.valarr.valf7=1;
    }
    else if(this.f7l!=0){this.valarr.valf7=0}
   }
    else{this.valarr.valf7=1 }
      
    return this.valarr.valf7;   
  }
  validation8(f8){
    this.f8l=this.acc.length;
    console.log(this.f8l=this.acc.length);
    if(this.f8l== 0){
      this.valarr.valf8=1;
    }
    else if(this.f8l!=0){this.valarr.valf8=0}
    return this.valarr.valf8;   
  }
  validation9(f9){
    this.f9l=this.pr.length;
    console.log(this.f9l=this.pr.length);
    if(this.f9l== 0){
      this.valarr.valf9=1;
    }
    else if(this.f9l!=0){this.valarr.valf9=0}
    return this.valarr.valf9;   
  }
  validation10(f10){
    this.f10l=this.pr1.length;
    console.log(this.f10l=this.pr1.length);
    if(this.f10l== 0){
      this.valarr.valf10=1;
    }
    else if(this.f10l!=0){this.valarr.valf10=0}
    return this.valarr.valf10;   
  }
  validation11(f11){
    this.f11l=this.pr2.length;
    console.log(this.f11l=this.pr2.length);
    if(this.f11l== 0){
      this.valarr.valf11=1;
    }
    else if(this.f11l!=0){this.valarr.valf11=0}
    return this.valarr.valf11;   
  }





  validationfull(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11){
    this.valarr.valf1=this.validation(f1);
    this.valarr.valf2 = this.validation2(f2);
    this.valarr.valf3 = this.validation3(f3);
    this.valarr.valf4 = this.validation4(f4);
    this.valarr.valf5=this.validation5(f5);
    this.valarr.valf6 = this.validation6(f6);
    this.valarr.valf7 = this.validation7(f7);
    this.valarr.valf8 = this.validation8(f8);
    this.valarr.valf9=this.validation9(f9);
    this.valarr.valf10 = this.validation10(f10);
    this.valarr.valf11 = this.validation11(f11);
   

  
    if(this.valarr.valf1==1 || this.valarr.valf2==1 || this.valarr.valf3==1 || this.valarr.valf4==1|| this.valarr.valf5==1 || this.valarr.valf6==1 || this.valarr.valf7==1|| this.valarr.valf8==1 || this.valarr.valf9==1 || this.valarr.valf10==1 || this.valarr.valf11==1)
    {
      this.valarr.valfull=1;
     
    }
    else if(this.valarr.valf1==0 && this.valarr.valf2==0 && this.valarr.valf3==0 && this.valarr.valf4==0 && this.valarr.valf5==0 && this.valarr.valf6==0 && this.valarr.valf7==0 && this.valarr.valf8==0 && this.valarr.valf9==0 && this.valarr.valf10==0  && this.valarr.valf11==0){
      this.valarr.valfull=0;
  
    }
    return this.valarr;
  }
  


  clear(){
    this.lno ='';
    this.exp =null;
    this.odr=  '';
    this.sick ='';
    this.con ='';
    this.ldate=null ;
    this.acc ='';
    this.inc ='';
    this.pr ='';
    this.pr1 ='';
    this.pr2 ='';


  }
  back(){
    this.router.navigate(['/tabs/tabs/home']);
   }

  ngOnInit() {
//     if(this.route.snapshot.data['special']){
// this.veh = this.route.snapshot.data['special'];

//     }
  }

}

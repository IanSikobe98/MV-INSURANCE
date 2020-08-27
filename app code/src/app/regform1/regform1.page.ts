import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { Regform1Service } from '../services/regForm1/regform1.service';
// import {   VehgetService } from '../services/drivform/vehget.service';              
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage'
import { GetinfoService } from '../services/getinfo/getinfo.service';

import { NavigationExtras } from '@angular/router'
import { PopduplicPage} from '../popduplic/popduplic.page';
import { PopoverController} from '@ionic/angular';
import { Platform,LoadingController } from '@ionic/angular';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';

@Component({
  selector: 'app-regform1',
  templateUrl: './regform1.page.html',
  styleUrls: ['./regform1.page.scss'],
})
export class Regform1Page implements OnInit {

  vrno : string;
  vhype : string;
  model : string;
  YOM : number;
  engine : number;
  btype : string;
  cost : number;
  hpc: string;
  use : string;
  owid : number;
  owfname : string;
  owsname : string;
  natid: number;
  users: any;
  info: any;


  status: {
    status:'',
    message:''
  }

  user:{

  vrno:string,
  vhype : string;
  model : string;
  YOM : number;
  engine : number;
  btype : string;
  cost : number;
  hpc: string;
  use : string;
  owid : number;
  owfname : string;
  owsname : string;
  // natid : number ;
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

  }
  valnew: { valfull: number; valf1: number; valf2: number;  valf3: number; valf4: number; valf5: number; valf6: number;valf7: number;valf8: number; valf9: number; valf10: number;valf11: number;valf12: number;};
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
  testf1l: any;




  constructor(public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController, private Regform1Service:Regform1Service ,
    //  private VehgetService:VehgetService,private router: Router
    private storage:Storage, private GetinfoService: GetinfoService,private route: ActivatedRoute,private router: Router) 
  {
  //   this.GetinfoService.getToken().then((token)=>{
  //     this.users = (JSON.parse(token));
  //     console.log(this.users)
  //   });
  //  console.log(this.users);
  this.route.queryParams.subscribe(params =>{
    console.log('params: ', params);
    
    this.info = JSON.parse(params.veh);
    console.log(this.info);
  
    
    
    })
    
    this.vrno='';
    this.vhype ='';
    this.model ='';
    this.YOM  ;
    this.engine ;
    this.btype ='';
    this.cost ;
    this.hpc='';
    this.use ='';
    this. owid ;
    this.owfname ='';
    this.owsname ='';
    this.natid;


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
      valf12:0
      

    };
  }




  signmeup(){
    this.user = {
    vrno: this.vrno,
    vhype : this.vhype ,
    model : this.model,
    YOM : this.YOM ,
    engine :this.engine, 
    btype : this.btype,
    cost : this.cost,
    hpc : this.hpc,
    use : this.use ,
    owid : this. owid, 
    owfname : this.owfname, 
    owsname : this.owsname,
    // natid : this.info.natid 
    }

    // this.f2l =this.pass.length;
this.valnew =this.validationfull(this.user.vrno,this.user.YOM,this.user.engine,this.user.owid,this.user.owfname,this.user.owsname,this.user.cost,this.user.vhype,this.user.model,this.user.btype,this.user.hpc,this.user.use);
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
this.valarr.valfull=this.valnew.valfull; 
console.log(this.valarr);

if(this.valnew.valfull==0){
  this.LoadingController.create({
    message:" Validating Details ....."
   }).then((loadingElement)=>{
     loadingElement.present();
      var ref = this;
      setTimeout(function()
      {
        ref.LoadingController.dismiss();
      },2000)
    })
    
      // this.VehgetService.setData(42,JSON.stringify(this.user));
      // this.router.navigateByUrl('drivform/:42');
      this.route.queryParams.subscribe(params =>{
        console.log('params: ', params);
        
        this.info = JSON.parse(params.veh);
        console.log(this.info);
      
        
        
        })

      let navigationExtras : NavigationExtras = {
        queryParams:{
        veh : JSON.stringify(this.user),
        
        
        }
        
        }
  
        // this.user.vhype
      this.Regform1Service.signmeup(this.user.vrno,this.info.choice ,this.user.model ,this.user.YOM ,this.user.engine ,this.user.btype,this.user.cost 
        ,this.user.hpc,this.user.use,this.user. owid ,this.user.owfname ,this.user.owsname,this.info.Natid).subscribe((status:any) => {
        console.log(status);
  
        if(status){
                if(status.status == true){
                    this.navCtrl.navigateForward(['drivform'],  navigationExtras);
                    // this.router.navigateByUrl('drivform/:42');
                 }
  
                 if(status.status != true){
                  this.popover.create({component:PopduplicPage,showBackdrop:false}).then((popoverElement)=>{
                    popoverElement.present();        })    }
        }
      }
      ,
      // (err) => console.log("Error Loging In:", JSON.parse(err._body).description),
      () => { console.log("error")
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
    this.f1l=this.vrno.length;
    console.log(this.f1l=this.vrno.length);
    this.testf1l =/^[a-zA-Z0-9]+$/.test(this.vrno);
    console.log(/^[a-zA-Z0-9]+$/.test(this.vrno));
    if(this.f1l== 0 || this.f1l>8 || this.f1l<7 ){
      this.valarr.valf1=1;
    }
    else if(this.f1l!=0  &&this.f1l>6 && this.f1l<9){this.valarr.valf1=0}
    return this.valarr.valf1;   
  }
   validation2(f2){
    

    if(f2!=undefined){
      this.f2l=this.YOM.toString().length
      console.log(this.YOM.toString());
      console.log(this.YOM.toString().search(/\./));
      console.log(this.YOM.toString().search(/\-/));
    if(this.f2l==0 || this.f2l>4 || this.f2l<4 || this.YOM.toString().search(/\./)!=-1 || this.YOM.toString().search(/\-/)!=-1){
      this.valarr.valf2=1;
    
    }
    else if(this.f2l!==0 && this.f2l==4 && this.YOM.toString().search(/\./)==-1){this.valarr.valf2=0} }
else{this.valarr.valf2=1 }
    
    return this.valarr.valf2;
    }

  
  
    validation3(f3){
    

      if(f3!=undefined){
        this.f3l=this.engine.toString().length
        console.log(this.engine.toString());
        console.log(this.engine.toString().search(/\./));
        console.log(this.engine.toString().search(/\-/));
      if(this.f3l==0 || this.f3l>10 || this.engine.toString().search(/\./)!=-1 || this.engine.toString().search(/\-/)!=-1){
        this.valarr.valf3=1;
      
      }
      else if(this.f3l!==0 && this.f3l<=10 && this.engine.toString().search(/\./)==-1&& this.engine.toString().search(/\-/)==-1){this.valarr.valf3=0} }
  else{this.valarr.valf3=1 }
      
      return this.valarr.valf3;
      }

      validation4(f4){
    

        if(f4!=undefined){
          this.f4l=this.owid.toString().length
          console.log(this.owid.toString());
          console.log(this.owid.toString().search(/\./));
          console.log(this.owid.toString().search(/\-/));
        if(this.f4l==0 || this.f4l>10 || this.owid.toString().search(/\./)!=-1 || this.owid.toString().search(/\-/)!=-1){
          this.valarr.valf4=1;
        
        }
        else if(this.f4l!==0 && this.f4l<=10 && this.owid.toString().search(/\./)==-1){this.valarr.valf4=0} }
    else{this.valarr.valf4=1 }
        
        return this.valarr.valf4;
        }
  
        validation5(f5){
          this.f5l=this.owfname.length;
          console.log(this.f5l=this.owfname.length);
          // this.testf1l =/^[a-zA-Z0-9]+$/.test(this.vrno);
          // console.log(/^[a-zA-Z0-9]+$/.test(this.vrno));
          if(this.f5l== 0){
            this.valarr.valf5=1;
          }
          else if(this.f5l!=0){this.valarr.valf5=0}
          console.log("rte"+this.valarr.valf5)
          return this.valarr.valf5;   
        }

        validation6(f6){
          this.f6l=this.owsname.length;
          console.log(this.f6l=this.owsname.length);
          // this.testf1l =/^[a-zA-Z0-9]+$/.test(this.vrno);
          // console.log(/^[a-zA-Z0-9]+$/.test(this.vrno));
          if(this.f6l== 0){
            this.valarr.valf6=1;
          }
          else if(this.f6l!=0){this.valarr.valf6=0}
          console.log("rte"+this.valarr.valf6)
          return this.valarr.valf6;   
        }

        validation7(f7){
    

          if(f7!=undefined){
            this.f7l=this.cost.toString().length
            console.log(this.cost.toString());
            console.log(this.cost.toString().search(/\./));
            console.log(this.cost.toString().search(/\-/));
          if(this.f7l==0 || this.f7l>10 || this.cost.toString().search(/\./)!=-1 || this.cost.toString().search(/\-/)!=-1){
            this.valarr.valf7=1;
          
          }
          else if(this.f7l!==0 && this.f7l<=10 && this.cost.toString().search(/\./)==-1){this.valarr.valf7=0} }
      else{this.valarr.valf7=1 }
          
          return this.valarr.valf7;
          }


          // validation8(f8){
          //   this.f8l=this.vhype.length;
          //   console.log(this.f8l=this.vhype.length);
          //   if(this.f8l== 0){
          //     this.valarr.valf8=1;
          //   }
          //   else if(this.f8l!=0){this.valarr.valf8=0}
          //   return this.valarr.valf8;   
          // }
          validation9(f9){
            this.f9l=this.model.length;
            console.log(this.f9l=this.model.length);
            if(this.f9l== 0){
              this.valarr.valf9=1;
            }
            else if(this.f9l!=0){this.valarr.valf9=0}
            return this.valarr.valf9;   
          }
          validation10(f10){
            this.f10l=this.btype.length;
            console.log(this.f10l=this.btype.length);
            if(this.f10l== 0){
              this.valarr.valf10=1;
            }
            else if(this.f10l!=0){this.valarr.valf10=0}
            return this.valarr.valf10;   
          }
          validation11(f11){
            this.f11l=this.hpc.length;
            console.log(this.f11l=this.hpc.length);
            if(this.f11l== 0){
              this.valarr.valf11=1;
            }
            else if(this.f11l!=0){this.valarr.valf11=0}
            return this.valarr.valf11;   
          }

          validation12(f12){
            this.f12l=this.use.length;
            console.log(this.f12l=this.use.length);
            if(this.f12l== 0){
              this.valarr.valf12=1;
            }
            else if(this.f12l!=0){this.valarr.valf12=0}
            return this.valarr.valf12;   
          }
        
    
    validationfull(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12){
      this.valarr.valf1=this.validation(f1);
      this.valarr.valf2 = this.validation2(f2);
      this.valarr.valf3 = this.validation3(f3);
      this.valarr.valf4 = this.validation4(f4);
      this.valarr.valf5 = this.validation5(f5);
      this.valarr.valf6 = this.validation6(f6);
      this.valarr.valf7 = this.validation7(f7);
      // this.valarr.valf8 = this.validation8(f8);
      this.valarr.valf9=this.validation9(f9);
      this.valarr.valf10 = this.validation10(f10);
      this.valarr.valf11 = this.validation11(f11);
      this.valarr.valf12 = this.validation12(f12);
    
      if(this.valarr.valf1==1 || this.valarr.valf2==1 || this.valarr.valf3==1 || this.valarr.valf4==1|| this.valarr.valf5==1 || this.valarr.valf6==1 || this.valarr.valf7==1|| this.valarr.valf9==1 || this.valarr.valf10==1 || this.valarr.valf11==1 || this.valarr.valf12==1)
      {
        this.valarr.valfull=1;
       
      }
      else if(this.valarr.valf1==0 && this.valarr.valf2==0 && this.valarr.valf3==0 && this.valarr.valf4==0 && this.valarr.valf5==0 && this.valarr.valf6==0 && this.valarr.valf7==0 && this.valarr.valf9==0 && this.valarr.valf10==0  && this.valarr.valf11==0&& this.valarr.valf12==0){
        this.valarr.valfull=0;
    
      }
      return this.valarr;
    }
    





clear(){
  this.vrno='';
  // this.vhype ='';
  this.model ='';
  this.YOM= null;
  this.engine = null;
  this.btype ='';
  this.cost= null ;
  this.hpc='';
  this.use ='';
  this. owid = null;
  this.owfname ='';
  this.owsname ='';
  this.natid= null;

}

back(){
  this.router.navigate(['/tabs/tabs/home']);
 }
  ngOnInit() {
  }

}

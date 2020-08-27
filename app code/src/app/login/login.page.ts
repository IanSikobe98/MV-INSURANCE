import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { NavController } from '@ionic/angular';
import { SigninService } from '../services/signin/signin.service';
import { ValidationService } from '../services/validation/validation.service';
// import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Platform,LoadingController } from '@ionic/angular';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { PopoverController} from '@ionic/angular';
import { WaitService } from '../services/wait/wait.service';
import { PoploginPage } from '../poplogin/poplogin.page';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pno : number;
  pass : string; 

  status: {
    status:'',
    message:''
  }

  user:{
    pno : number;
    pass : string; 
  }

  valarr: {

    valfull:number;
    valf1:number;
    valf2:number
  }
  valnew: { valfull: number; valf1: number; valf2: number; };
  f1l: number;
  f2l: number;

  constructor(private  LoadingService : LoadingService ,private WaitService : WaitService,private popover:PopoverController,public LoadingController:LoadingController,public storage:Storage,public navCtrl: NavController, private SigninService:SigninService , private ValidationService:ValidationService) { 

    this.pno;
    this.pass=''; 

    this.status = {
      status: '',
      message: ''
    };

    this.valarr= {

      valfull:0,
      valf1:0,
      valf2:0
    };
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
        this.f2l=this.pass.length;
        
        console.log(/^[a-zA-Z]+$/.test(this.pass));
        if(this.f2l== 0){
          this.valarr.valf2=1;
        }
        else if(this.f2l!=0){this.valarr.valf2=0}
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


  async signin(){

    this.user = {
      pno : this.pno,
      pass : this.pass 
    }

this.f2l =this.pass.length;
this.valnew =this.validationfull(this.user.pno,this.user.pass);
this.valarr.valf1=this.valnew.valf1;
this.valarr.valf2=this.valnew.valf2;
this.valarr.valfull=this.valnew.valfull; 
console.log(this.valarr);



if(this.valnew.valfull==0){

  // this.LoadingController.create({
  //   message:" Validating Details ....."
  //  }).then((loadingElement)=>{
  //    loadingElement.present();
  //     var ref = this;
  //     setTimeout(function()
  //     {
  //       ref.LoadingController.dismiss();
  //     },4000)
  //   })

  // const loading = await this.LoadingController.create({
  //   message: 'Validating Details...',
  //   duration: 200
  // });
  // await loading.present();

  // const { role, data } = await loading.onDidDismiss();
  // console.log('Loading dismissed!');
  this.LoadingService.present("Validating Details....");
    this.SigninService.signin(this.user.pno,this.user.pass).subscribe(async (status:any) => {
     
 console.log('Loading dismissed!');
 console.log(status);
      if(status){
              if(status.status == true){
                
                this.storage.set('userdetails', JSON.stringify(status));  
                const wait = await this.WaitService.waitline();
              
                this.navCtrl.navigateForward('tabs/tabs/home');
                this.LoadingService.dismiss();
                  
               }

               if(status.status != true){
                 console.log("error")
                 this.LoadingService.dismiss();
                this.popover.create({component:PoploginPage,showBackdrop:false}).then((popoverElement)=>{
                  popoverElement.present();
                })
            
                  // alert("Error in server");  
                         }
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

      // alert("Error in server");  
  }
    
    );
  
}
else if(this.valnew.valfull!=0)
  {
    console.log("try again");
  }
  
  
  
  
  }

  signup(){
    this.navCtrl.navigateForward('/signup');
  }

  ngOnInit() {
  }

}























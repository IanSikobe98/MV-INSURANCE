import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PayserviceService } from '../services/payservice/payservice.service';
import { PayconfService } from '../services/payconf/payconf.service';
import { WaitService } from '../services/wait/wait.service';
import { SavepayService } from '../services/savepay/savepay.service';
import { PopoverController} from '@ionic/angular';
import {LoadingController } from '@ionic/angular';
import { Poppay1Page } from '../poppay1/poppay1.page';
import { Poppay2Page } from '../poppay2/poppay2.page';
import { Poppay3Page } from '../poppay3/poppay3.page';
// import { LoadingService } from '../services/loading/loading.service';
import { Savepay2Service } from '../services/savepay2/savepay2.service';
import { LoadingService } from '../services/loading/loading.service';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { PoppaympPage } from '../poppaymp/poppaymp.page';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  disableButton: any;
  data: any;
  pno : any;
  pno1 : any;
  data3: any;

  valarr: {

    valfull:number;
    valf1:number;
  }

  valnew: { valfull: number; valf1: number;}
  f1l: number;
  loading1: HTMLIonLoadingElement;
  // public loading: LoadingService,
  constructor(private  LoadingService : LoadingService ,private Savepay2Service:Savepay2Service,public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController,private route: ActivatedRoute,private router: Router,private PayserviceService: PayserviceService, private PayconfService : PayconfService,private WaitService : WaitService, private SavepayService : SavepayService) {
   this.pno1 ="";
   this.pno ="";

   this.valarr= {

    valfull:0,
    valf1:0}
    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      console.log(this.data);
   
    })

   }
   back(){
    this.navCtrl.navigateForward('/tabs/tabs/policysel');
   }

    Pay(){
      this.disableButton = true;
      console.log(this.pno1);
     this.pno =254+this.pno1;
     console.log(this.data.polno);
     console.log(this.data.amount);
     console.log(this.pno);


     this.valnew =this.validationfull(this.pno);
     this.valarr.valf1=this.valnew.valf1;
     this.valarr.valfull=this.valnew.valfull; 
    console.log(this.valarr);
    if(this.valnew.valfull==0){
      // this.LoadingController.create({
      //   message:" Processing Payment Request ......"
      //  }).then((loadingElement)=>{
      //    loadingElement.present();
      //     var ref = this;
      //     setTimeout(function()
      //     {
      //       ref.LoadingController.dismiss();
      //     },3000)
      //   })

      this.LoadingService.present("Processing Payment Request ......");


     this.PayserviceService.pay2(this.data.polno,this.data.amount,this.pno).subscribe(async (data2:any) => {
      console.log(data2);
      if(data2){
    
        this.LoadingService.dismiss();
        if(typeof data2.errorMessage === 'undefined'&& data2.CustomerMessage == "Success. Request accepted for processing"){
           console.log("Awaiting Confirmation");
           console.log(data2.CustomerMessage);
          // this.router.navigate(['/policies'],navigationExtras);
          // const wait = await this.WaitService.waitline();
        //  this.presentLoading();
        this.LoadingService.present("Confirming Payment Request ......");
          this.PayconfService.conf(data2.MerchantRequestID).subscribe(async (data4:any) => {
            //  this.presentLoading();
            // this.loading.present();
            // this.loading1.dismiss();
            console.log(data4);
            console.log(data4.Body.stkCallback.ResultDesc);
            if(data4){
              this.LoadingService.dismiss();
              // this.loading.dismiss();
              if(data4.Body.stkCallback.ResultDesc == "The service request is processed successfully."){
                  // this.router.navigate(['/policies'],navigationExtras);
                  // this.LoadingController.create({
                  //   message:" Saving policies ......"
                  //  }).then((loadingElement)=>{
                  //    loadingElement.present();
                  //     var ref = this;
                  //     setTimeout(function()
                  //     {
                  //       ref.LoadingController.dismiss();
                  //     },4000)
                  //   })

                  this.LoadingService.present("Saving payment ......");

                  // this.SavepayService.paysave(this.data.polno,this.data.amount).subscribe((data5:any) =>{
                    this.Savepay2Service.paysave2(this.data.polno,this.data.amount,data4.Body.stkCallback.CallbackMetadata.Item[1].Value).subscribe((data5:any) =>{
                    console.log(data5);
                    console.log(data4.Body.stkCallback.CallbackMetadata.Item[1].Value);
                    this.navCtrl.navigateForward('/tabs/tabs/policysel');
                    this.LoadingService.dismiss();
                  });

               }
        
               if(data4.Body.stkCallback.ResultDesc == "The balance is insufficient for the transaction"){
                  // this.navCtrl.navigateForward('/tab2');               }
                  console.log("unsuccessfull transaction");  
                  this.popover.create({component:Poppay1Page,showBackdrop:false}).then((popoverElement)=>{
                    popoverElement.present();
                  })
                  this.disableButton = false;
               }

               if(data4.Body.stkCallback.ResultDesc == "Request cancelled by user"){
                // this.navCtrl.navigateForward('/tab2');               }
                console.log("unsuccessfull transaction");  
                this.popover.create({component:Poppay2Page,showBackdrop:false}).then((popoverElement)=>{
                  popoverElement.present();
                })
                this.disableButton = false;
             }  
            //    if(data4.Body.stkCallback.ResultDesc != "The service request is processed successfully."){
            //     // this.navCtrl.navigateForward('/tab2');               }
            //     console.log("unsuccessfull transaction");  
            //     this.popover.create({component:Poppay3Page,showBackdrop:false}).then((popoverElement)=>{
            //       popoverElement.present();
            //     })
            //     this.disableButton = false;
            //  }
              
              
              
              
              }
          }
          
          //JHERE
          ,
          () => { 
            this.LoadingService.dismiss();
            console.log("error")
            this.disableButton = false;   
          this.popover.create({component:PoppaympPage,showBackdrop:false}).then((popoverElement)=>{
            popoverElement.present();
          })
        }
          );
        }
  
         else if(data2.errorMessage != "Success. Request accepted for processing"|| typeof data2.CustomerMessage === 'undefined'){

          console.log("Failed transaction");  
          console.log(data2.errorMessage);
          this.popover.create({component:Poppay3Page,showBackdrop:false}).then((popoverElement)=>{
            popoverElement.present();
          })
          // this.navCtrl.navigateForward('/tab2');   
          this.disableButton = false;         
             }
  }
    
      // console.log(data2[0].regno);       
      this.data3 =data2;
    }
    ,
    () => { 
      this.LoadingService.dismiss();
      this.disableButton = false; 
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
      this.disableButton = false;
    }

 }


   validation(f1){
    

    if(f1!=undefined){
      this.f1l=this.pno.toString().length
      console.log(this.pno.toString());
      console.log(this.pno.toString().search(/\./));
      console.log(this.pno.toString().search(/\-/));
    if(this.f1l==0 || this.f1l>12 || this.f1l<12 || this.pno.toString().search(/\./)!=-1 || this.pno.toString().search(/\-/)!=-1){
      this.valarr.valf1=1;
    
    }
    else if(this.f1l!==0 && this.f1l==12 && this.pno.toString().search(/\./)==-1){this.valarr.valf1=0} }
else{this.valarr.valf1=1 }
    
    return this.valarr.valf1;
    }

    validationfull(f1){
      this.valarr.valf1=this.validation(f1);

    
      if(this.valarr.valf1==1 ){
        this.valarr.valfull=1;
       
      }
      else if(this.valarr.valf1==0 ){this.valarr.valfull=0;
    
      }
      return this.valarr;
    }

    // Unable to lock subscriber, a transaction is already in process for the current subscriber
    


  //   async presentLoading() {
  //     this.loading1 = await this.LoadingController.create({
  //       message: 'Hellooo',
  //       duration: 3000
  //     });
  //     return await this.loading1.present();
  // }

  ngOnInit() {
  }

}



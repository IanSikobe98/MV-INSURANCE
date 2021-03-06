import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DisppolicyService } from '../services/disppolicy/disppolicy.service';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { Platform,LoadingController } from '@ionic/angular';
import { WaitService } from '../services/wait/wait.service';
import { LoadingService } from '../services/loading/loading.service';
import { StickerService } from '../services/sticker/sticker.service';

@Component({
  selector: 'app-novalact',
  templateUrl: './novalact.page.html',
  styleUrls: ['./novalact.page.scss'],
})
export class NovalactPage implements OnInit {
data:any
regno:any
  choice: string;
  valstat: string;
  data3: any;
  testing: string;
  polno: any;
  
  async onChange($event){
  console.log($event);
  this.choice ="No";
  this.valstat =$event.detail.value;
  // this.LoadingController.create({
  //   message:"Getting Policy Details....."
  //  }).then((loadingElement)=>{
  //    loadingElement.present();
  //     var ref = this;
  //     setTimeout(function()
  //     {
  //       ref.LoadingController.dismiss();
  //     },2000)
  //   })


  // const loading = await this.LoadingController.create({
  //   message: 'Please wait...',
  //   duration: 200
  // });
  // await loading.present();

  // const { role, data } = await loading.onDidDismiss();
  // console.log('Loading dismissed!');
  this.LoadingService.present("Please wait ........");
    console.log(this.data[0].natid);
      this.DisppolicyService.findpol(this.data[0].natid,this.valstat,this.choice).subscribe(async (data2:any) => {
        this.LoadingService.dismiss();
        console.log(data2);
  
    console.log(data2[0].regno);       
    this.data3 =data2;
this.data=data2
console.log(this.data[0].regno);   
    // let navigationExtras : NavigationExtras = {
      
    //   queryParams:{
    //   veh :JSON.stringify(this.data3),
      
      
    //   }}
    //   console.log(this.data3);
    this.valstat="Active"
    // const wait = await this.WaitService.waitline();
      // this.router.navigate(['/novalact'],navigationExtras);  

}
,
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
  // ionViewWillEnter(){
  //   this.testing = "Active"
    
  //   }


  constructor(private StickerService:StickerService,private  LoadingService : LoadingService ,private WaitService : WaitService,public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController, private route: ActivatedRoute,private router: Router,private DisppolicyService: DisppolicyService) {
    this.testing="Pend";
    console.log(this.testing);
    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      
   
    })
    
  }
  back(){
    this.router.navigate(['tabs/tabs/policysel']);
   }

 async sendata( polno){

 
// this.polno =polno;
// console.log(this.polno);

// console.log(this.data[polno].polno);


// this.LoadingService.present("Please wait ........");

  this.StickerService.stickyp(this.data[polno].polno).subscribe(async(data2:any) => {
    // this.LoadingService.dismiss();
    console.log(data2);

console.log(data2[0].regno);       
this.data3 =data2;
this.data=data2
console.log(this.data[0].regno);   
let navigationExtras : NavigationExtras = {
  
  queryParams:{
  veh :JSON.stringify(this.data3),
  
  
  }}
  console.log(this.data3);

// const wait = await this.WaitService.waitline();

  this.router.navigate(['/sticker'],navigationExtras);  
 

}
,
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



  pay( regno){
    this.regno =regno;
    console.log(this.regno);
    
    console.log(this.data[regno].regno);

    let navigationExtras : NavigationExtras = {
      
      queryParams:{
      veh :JSON.stringify(this.data[regno]),
      
      
      }}
      console.log(this.data[regno]);
      this.testing="Pend";
      this.router.navigate(['/payment'],navigationExtras);  
      }












  


  ngOnInit() {
  }

}

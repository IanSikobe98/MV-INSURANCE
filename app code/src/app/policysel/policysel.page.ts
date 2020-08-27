import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'
import { GetinfoService } from '../services/getinfo/getinfo.service';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DisppolicyService } from '../services/disppolicy/disppolicy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { PopoverController} from '@ionic/angular';
import { Platform,LoadingController } from '@ionic/angular';
import { WaitService } from '../services/wait/wait.service';
import { LoadingService } from '../services/loading/loading.service';


@Component({
  selector: 'app-policysel',
  templateUrl: './policysel.page.html',
  styleUrls: ['./policysel.page.scss'],
})
export class PolicyselPage implements OnInit {
  disableButton: any;
choice : String;
userp : any;
valstat : String;
data3 : any;
natid : number;
pol:{

  choice : String;
  valstat : String;
  natid : number;
}

  constructor(private  LoadingService : LoadingService ,private WaitService : WaitService,public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController, private storage:Storage, private GetinfoService: GetinfoService,private DisppolicyService: DisppolicyService,private router: Router) { 
    this.choice ="";
    this.valstat="";
    this.natid;

  }

  async withval(){
    // this.disableButton = true;
this.choice ="Yes";
this.valstat ="Pendp"


this.GetinfoService.getToken().then((token)=>{
  this.userp = (JSON.parse(token));
  console.log(this.userp)
});

// this.pol = {
//   choice: this.choice,
//   valstat : this.valstat,
//   natid  : this.userp.Natid,
// }
// this.LoadingController.create({
//   message:"Getting Policy Details....."
//  }).then((loadingElement)=>{
//    loadingElement.present();
//     var ref = this;
//     setTimeout(function()
//     {
//       ref.LoadingController.dismiss();
//     },3000)
//   })

this.LoadingService.present("Getting Policy Details....");
  const wait = await this.WaitService.waitline();

// const loading = await this.LoadingController.create({
//   message: 'Getting policy details...',
//   duration: 200
// });
// await loading.present();

// const { role, data } = await loading.onDidDismiss();
// console.log('Loading dismissed!');


  console.log(this.userp.Natid);
this.DisppolicyService.findpol(this.userp.Natid,this.valstat,this.choice).subscribe((data2:any) => {
  console.log(data2);

  console.log(data2[0].regno);       
  this.data3 =data2;
  
  let navigationExtras : NavigationExtras = {
    queryParams:{
    veh :JSON.stringify(this.data3),
    
    
    }}
    // this.disableButton = false;
          this.router.navigate(['yesvalact'],navigationExtras);
          this.LoadingService.dismiss();
       
  
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

  async withoutval(){
    // this.disableButton = true;
  this.choice ="No";
  this.valstat ="Pend"
  
  this.GetinfoService.getToken().then((token)=>{
    this.userp = (JSON.parse(token));
    console.log(this.userp)
  });
  // this.LoadingController.create({
  //   message:"Getting Policy Details....."
  //  }).then((loadingElement)=>{
  //    loadingElement.present();
  //     var ref = this;
  //     setTimeout(function()
  //     {
  //       ref.LoadingController.dismiss();
  //     },3000)
  //   })
  // const loading = await this.LoadingController.create({
  //   message: 'Getting Policy Details....',
  //   duration: 100
  // });
  // await loading.present();

  // const { role, data } = await loading.onDidDismiss();
  // console.log('Loading dismissed!');
    // const wait = await this.WaitService.waitline();
    this.LoadingService.present("Getting Policy Details....");
    
    const wait = await this.WaitService.waitline();
    console.log(this.userp.Natid);
  this.DisppolicyService.findpol(this.userp.Natid,this.valstat,this.choice).subscribe(async (data2:any) => {
    // const loading = await this.LoadingController.create({
    //   message: 'Getting Policy Details....',
    //   duration: 50
    // });
    // await loading.present();
  
    // const { role, data } = await loading.onDidDismiss();
    
    console.log('Loading dismissed!');
    console.log(data2);
  
    console.log(data2.regno);       
    this.data3 =data2;
    
    let navigationExtras : NavigationExtras = {
      queryParams:{
      veh :JSON.stringify(this.data3),
      
      
      }}
      // this.disableButton = false;
            this.router.navigate(['/novalact'],navigationExtras);
            this.LoadingService.dismiss();
         
    
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
});
  }








  ngOnInit() {
  }

}

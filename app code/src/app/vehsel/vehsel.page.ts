import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
import { GetinfoService } from '../services/getinfo/getinfo.service';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { WaitService } from '../services/wait/wait.service';
import { Platform,LoadingController } from '@ionic/angular';
import { GetvehService } from '../services/getveh/getveh.service';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-vehsel',
  templateUrl: './vehsel.page.html',
  styleUrls: ['./vehsel.page.scss'],
})
export class VehselPage implements OnInit {
  userp: any;
  veh1: any;
  data: { 
    status: any; message: any; fname: any; sname: any; Natid: any;
     choice: string; };
  data5: any;
  choice: string;
  users: any;
  info: any;

  constructor(private  LoadingService : LoadingService ,private popover:PopoverController,private GetvehService: GetvehService,private WaitService : WaitService,public LoadingController:LoadingController,public navCtrl: NavController, private storage:Storage, private GetinfoService: GetinfoService,private route: ActivatedRoute,private router: Router) { 
    // this.data = {
    //   status:'',
    //   message: '',
    //   fname:'',
    //   sname:'',
    //   natid:0,
    //   choice:'Motorvehicle'
    // };
    
    this.GetinfoService.getToken().then( (token)=>{
      // const wait = await this.WaitService.waitline();
      this.userp = (JSON.parse(token));
      console.log(this.userp)
    });
    // this.route.queryParams.subscribe(params =>{
    //   console.log('params: ', params);
      
    //   this.info = JSON.parse(params.veh);
    //   console.log(this.info);
    
      
      
    //   })


  }



  async new1(){

  //   this.GetinfoService.getToken().then((token)=>{
  //     this.userp = (JSON.parse(token));
  //     console.log(this.userp)
  //   });
  //  console.log(this.userp.fname);

  //  this.route.queryParams.subscribe(params =>{
  //   console.log('params: ', params);
    
  //   this.veh1 = JSON.parse(params.veh);
  //   console.log(this.veh1);
  //   console.log(this.veh1.choice);
    
    
    
    // })



//     this.LoadingController.create({
//       message:"Getting Policy Details....."
//      }).then((loadingElement)=>{
//        loadingElement.present();
//         var ref = this;
//         setTimeout(function()
//         {
//           ref.LoadingController.dismiss();
//         },3000)
//       })
//       const wait = await this.WaitService.waitline();
//       const wait2 = await this.WaitService.waitline();
// console.log(this.data);
//    let navigationExtras : NavigationExtras = {
//     queryParams:{
//     veh1 : JSON.stringify(this.userp),
    
    
//     }
    
//     }
//     const wait3 = await this.WaitService.waitline();
//     this.navCtrl.navigateForward(['/regform1'],  navigationExtras);
//     // this.route.queryParams.subscribe(params =>{
//     //   console.log('params: ', params);
      
//     //   this.veh1 = JSON.parse(params.veh);
//     //   console.log(this.veh1);
//     //   console.log(this.veh1.choice);
      
      
      
//       // })
//       // console.log(this.veh1);


this.GetinfoService.getToken().then((token)=>{
  this.userp = (JSON.parse(token));
  console.log(this.userp)

  
});

console.log(this.userp.fname);
console.log(this.userp.natid);

this.data = {
  status:this.userp.status,
  message:this.userp.message,
  fname:this.userp.fname,
  sname:this.userp.sname,
  Natid:this.userp.Natid,
  choice:"Motorvehicle"
};

let navigationExtras : NavigationExtras = {
queryParams:{
veh : JSON.stringify(this.data),


}

}

this.navCtrl.navigateForward(['/regform1'],  navigationExtras);


      
  }

  // async
   async existing2(){

this.choice="Motorvehicle"

    this.GetinfoService.getToken().then((token)=>{
      this.userp = (JSON.parse(token));
      console.log(this.userp)
      

    });
    // this.LoadingController.create({
    //   message:"Getting Car Details....."
    //  }).then((loadingElement)=>{
    //    loadingElement.present();
    //     var ref = this;
    //     setTimeout(function()
    //     {
    //       ref.LoadingController.dismiss();
    //     },5000)
    //   })

    // const loading = await this.LoadingController.create({
    //   message: 'Getting Car Details...',
    //   duration: 200
    // });
    // await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');


    this.LoadingService.present("Getting vehicle Details....");
    const wait = await this.WaitService.waitline();
      // const wait = await this.WaitService.waitline();

    this.GetvehService.findveh(this.userp.Natid,this.choice).subscribe((status:any) => {
      console.log(status);
      this.data5 = status;

     
let navigationExtras : NavigationExtras = {
    queryParams:{
    veh : JSON.stringify(this.data5),
    
    }}

                  this.navCtrl.navigateForward(['vehsel2'],  navigationExtras);
                  this.LoadingService.dismiss();
                 
               

            
      
    }
    ,
    () => { 
      this.LoadingService.dismiss();
      console.log("error")
    this.popover.create({component:PopoverserverPage,showBackdrop:false}).then((popoverElement)=>{
      popoverElement.present();
    })
  }

    );
   
    
    
  }

  back(){
    this.router.navigate(['tabs/tabs/home']);
   }

  ngOnInit() {
  }

}

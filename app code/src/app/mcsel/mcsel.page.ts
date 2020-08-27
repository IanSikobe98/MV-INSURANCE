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
  selector: 'app-mcsel',
  templateUrl: './mcsel.page.html',
  styleUrls: ['./mcsel.page.scss'],
})
export class McselPage implements OnInit {

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

    
    this.GetinfoService.getToken().then( (token)=>{
    
      this.userp = (JSON.parse(token));
      console.log(this.userp)
    });



  }



  async new1(){
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
  choice:"Motorcycle"
};

let navigationExtras : NavigationExtras = {
queryParams:{
veh : JSON.stringify(this.data),


}

}

this.navCtrl.navigateForward(['/regform2'],  navigationExtras);


      
  }

  // async
   async existing2(){

this.choice="Motorcycle"

    this.GetinfoService.getToken().then((token)=>{
      this.userp = (JSON.parse(token));
      console.log(this.userp)
      

    });
    // this.LoadingController.create({
    //   message:"Getting Motorbike Details....."
    //  }).then((loadingElement)=>{
    //    loadingElement.present();
    //     var ref = this;
    //     setTimeout(function()
    //     {
    //       ref.LoadingController.dismiss();
    //     },5000)
    //   })
      // const wait = await this.WaitService.waitline();

      // const loading = await this.LoadingController.create({
      //   message: 'Getting Motorbike Details...',
      //   duration: 200
      // });
      // await loading.present();
  
      // const { role, data } = await loading.onDidDismiss();
      // console.log('Loading dismissed!');

      this.LoadingService.present("Getting Motorbike Details....");
      const wait = await this.WaitService.waitline();
    




    this.GetvehService.findveh(this.userp.Natid,this.choice).subscribe((status:any) => {
      console.log(status);
      this.data5 = status;

     
let navigationExtras : NavigationExtras = {
    queryParams:{
    veh : JSON.stringify(this.data5),
    
    }}

                  this.navCtrl.navigateForward(['mcsel2'],  navigationExtras);
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

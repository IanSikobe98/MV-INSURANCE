import { Component } from '@angular/core';
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
import {ProfileinfService } from '../services/profileinf/profileinf.service';
import {GettransService } from '../services/gettrans/gettrans.service';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  userp: any;
  data3: any;
  public usernames: string;

  constructor(private  LoadingService : LoadingService ,private GettransService:GettransService , private ProfileinfService : ProfileinfService,private WaitService : WaitService,public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController, private storage:Storage, private GetinfoService: GetinfoService,private DisppolicyService: DisppolicyService,private router: Router) {}

  ionViewWillEnter(){
    this.storage.get('userdetails').then((users)=> {
      this.usernames = (JSON.parse(users)).fname;
    });
  }
respass(){

  this.router.navigate(['respass']);
}

  async logout(){
    // this.LoadingController.create({
    //   message:" Logging Out ....."
    //  }).then((loadingElement)=>{
    //    loadingElement.present();
    //     var ref = this;
    //     setTimeout(function()
    //     {
    //       ref.LoadingController.dismiss();
    //     },1000)
    //   })
    // const loading = await this.LoadingController.create({
    //   message: 'Logging Out...',
    //   duration: 200
    // });
    // await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
    this.LoadingService.present("Logging Out....");
    const wait = await this.WaitService.waitline();
    this.navCtrl.navigateBack('');  
    this.LoadingService.dismiss();

  }

  async profile(){

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
    //   message:"Getting Profile Details....."
    //  }).then((loadingElement)=>{
    //    loadingElement.present();
    //     var ref = this;
    //     setTimeout(function()
    //     {
    //       ref.LoadingController.dismiss();
    //     },3000)
    //   })
    //   const wait = await this.WaitService.waitline();


    // const loading = await this.LoadingController.create({
    //   message: 'Getting Profile Details...',
    //   duration: 200
    // });
    // await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');

 this.LoadingService.present("Getting Profile....");
 const wait = await this.WaitService.waitline();
      console.log(this.userp.Natid);


      this.ProfileinfService.findinf(this.userp.Natid).subscribe((data2:any) => {
        console.log(data2);

        console.log(data2[0].regno);       
        this.data3 =data2;
        
        let navigationExtras : NavigationExtras = {
          queryParams:{
          veh :JSON.stringify(this.data3),
          
          
          }}
      
                this.router.navigate(['profileinf'],navigationExtras);
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



async cash(){

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
  //   message:"Getting Cash Details....."
  //  }).then((loadingElement)=>{
  //    loadingElement.present();
  //     var ref = this;
  //     setTimeout(function()
  //     {
  //       ref.LoadingController.dismiss();
  //     },3000)
  //   })
  //   const wait = await this.WaitService.waitline();


  // const loading = await this.LoadingController.create({
  //   message: 'Getting Cash Details...',
  //   duration: 200
  // });
  // await loading.present();

  // const { role, data } = await loading.onDidDismiss();
  // console.log('Loading dismissed!');

  this.LoadingService.present("Getting Cash Details....");
  const wait = await this.WaitService.waitline();
    console.log(this.userp.Natid);


    this.GettransService.findtrans(this.userp.Natid).subscribe((data2:any) => {
      console.log(data2);

      console.log(data2[0].regno);       
      this.data3 =data2;
      
      let navigationExtras : NavigationExtras = {
        queryParams:{
        veh :JSON.stringify(this.data3),
        
        
        }}
    
              this.router.navigate(['transrepo'],navigationExtras);
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


}
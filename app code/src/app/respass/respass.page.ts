import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { PopoverController, NavController} from '@ionic/angular';
import { Platform,LoadingController } from '@ionic/angular';
import { WaitService } from '../services/wait/wait.service';
import { Storage } from '@ionic/storage'
import { GetinfoService } from '../services/getinfo/getinfo.service';
import {RespassService } from '../services/respass/respass.service';
import {Respass2Service } from '../services/respass2/respass2.service';
import { PoppassPage } from '../poppass/poppass.page';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-respass',
  templateUrl: './respass.page.html',
  styleUrls: ['./respass.page.scss'],
})
export class RespassPage implements OnInit {
  pass2: string;
  pass1: string;
  userp: any;
  data3: any;
  passstat: number;

  constructor(private  LoadingService : LoadingService ,private Respass2Service: Respass2Service,private RespassService: RespassService,private WaitService : WaitService,public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController, private storage:Storage, private GetinfoService: GetinfoService,private router: Router) 
  {
this.pass1="";
this.pass2="";
   }

  async reset(){

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
  //   message:"Resetting....."
  //  }).then((loadingElement)=>{
  //    loadingElement.present();
  //     var ref = this;
  //     setTimeout(function()
  //     {
  //       ref.LoadingController.dismiss();
  //     },3000)
  //   })

  this.LoadingService.present("Validating Password....");
  const wait = await this.WaitService.waitline();

    console.log(this.userp.Natid);
    this.RespassService.resetpass(this.userp.Natid).subscribe(async (data2:any) => {
      console.log(data2);
    
      this.LoadingService.dismiss();
      this.data3 =data2;
      console.log(this.data3);
      if(this.data3.password==this.pass1)
      {
        this.passstat =0;
        console.log(this.pass1);
        console.log(this.pass2);


        this.LoadingService.present("Resetting....");
        // const wait = await this.WaitService.waitline()
        this.Respass2Service.resetpass(this.userp.Natid,this.pass2).subscribe((data2:any) => {
          this.LoadingService.dismiss();
          console.log(data2);

          this.data3 =data2;
          console.log(this.data3);
          if(this.data3.status==true){
            this.popover.create({component:PoppassPage,showBackdrop:false}).then((popoverElement)=>{
              popoverElement.present();
            })
            console.log("Right");
 
            this.userp.password=  this.pass2;
             this.storage.set('userdetails', JSON.stringify(this.userp));  


          }

    
                  
               
          
        }
        ,
        // (err) => console.log("Error Loging In:", JSON.parse(err._body).description),
        () => { 
          this.LoadingController.create({
            message:"Checking Error....."
           }).then((loadingElement)=>{
             loadingElement.present();
              var ref = this;
              setTimeout(function()
              {
                ref.LoadingController.dismiss();
              },1000)
            })
          console.log("error")
        this.popover.create({component:PopoverserverPage,showBackdrop:false}).then((popoverElement)=>{
          popoverElement.present();
        })
      
          // alert("Error in server");  
      });
      }
      else if(this.data3.password!=this.pass1)
      {
        this.passstat =1;
        console.log("Wrong");
      }

              
           
      
    }
    ,
    // (err) => console.log("Error Loging In:", JSON.parse(err._body).description),
    () => { 
      this.LoadingController.create({
        message:"Checking Error....."
       }).then((loadingElement)=>{
         loadingElement.present();
          var ref = this;
          setTimeout(function()
          {
            ref.LoadingController.dismiss();
          },1000)
        })
      console.log("error")
    this.popover.create({component:PopoverserverPage,showBackdrop:false}).then((popoverElement)=>{
      popoverElement.present();
    })

  
      // alert("Error in server");  
  });
}

   back(){
    this.router.navigate(['tabs/tabs/tab2']);
   }
  ngOnInit() {
  }

}

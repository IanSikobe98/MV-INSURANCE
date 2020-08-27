import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BenefitsService } from '../services/benefits/benefits.service';
import { PopoverController} from '@ionic/angular';
import { Platform,LoadingController } from '@ionic/angular';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { PopsavePage } from '../popsave/popsave.page';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.page.html',
  styleUrls: ['./benefits.page.scss'],
})
export class BenefitsPage implements OnInit {


  data :any
type :any
vehicle :any
rate :any
amount :any
policy:any
valuation:any
  constructor(private  LoadingService : LoadingService ,public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController,private route: ActivatedRoute,private router: Router,private BenefitsService:BenefitsService) { 

    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      console.log(this.data);
      
      
      
      })

  }



  async policyfill(){
    this.policy={
      type : this.data.type,
      vehicle : this.data.vehicle,
      rate : this.data.rate,
      amount : this.data.amount,
      valuation : this.data.valuation
        }
        // this.LoadingController.create({
        //   message:"Saving Policy ....."
        //  }).then((loadingElement)=>{
        //    loadingElement.present();
        //     var ref = this;
        //     setTimeout(function()
        //     {
        //       ref.LoadingController.dismiss();
        //     },3000)
        //   })

        

        // const loading = await this.LoadingController.create({
        //   message: 'Saving Policy...',
        //   duration: 200
        // });
        // await loading.present();
    
        // const { role, data } = await loading.onDidDismiss();
        // console.log('Loading dismissed!');

        this.LoadingService.present("Saving Policies....");
  
        this.BenefitsService.savepol(this.policy.vehicle,this.policy.type,this.policy.amount,this.policy.rate,this.policy.valuation).subscribe((status:any) => {
          console.log(status);

            if(status){
              if(status.status == true){
                  this.router.navigate(['tabs/tabs/policysel']);
                  this.LoadingService.dismiss();
               }
        
               if(status.status != true){
                  this.navCtrl.navigateForward('/home');  
                  this.LoadingService.dismiss();
                }
        }
        
        }
        ,
        // (err) => console.log("Error Loging In:", JSON.parse(err._body).description),
        () => { 
          this.LoadingService.dismiss();
          console.log("error")
        this.popover.create({component:PopsavePage,showBackdrop:false}).then((popoverElement)=>{
          popoverElement.present();
        })
      }
      
      );




  }
  back(){

    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      console.log(this.data);
      
      
      
      })
      let navigationExtras : NavigationExtras = {
        queryParams:{
        veh : JSON.stringify(this.data),
        
        
        }
        
        }
        this.router.navigate(['valuation'],navigationExtras);
}

  ngOnInit() {
  }
  
}

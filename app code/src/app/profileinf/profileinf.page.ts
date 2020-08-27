import { Component, OnInit } from '@angular/core';
import { PopoverserverPage } from '../popoverserver/popoverserver.page';
import { PopoverController} from '@ionic/angular';
import { Platform,LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profileinf',
  templateUrl: './profileinf.page.html',
  styleUrls: ['./profileinf.page.scss'],
})
export class ProfileinfPage implements OnInit {
  data: any;

  constructor(public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController, private route: ActivatedRoute,private router: Router ) 
  {
    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      console.log(this.data);
      
    })

   }

  back(){
    this.navCtrl.pop;
    // this.router.navigate(['tabs/tabs/tabs2']);
   }

   senddata(i){
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

      this.router.navigate(['/profileupd'],navigationExtras); 
  //  }
  //   this.router.navigate(['/profileupd']);
   }

  ngOnInit() {
  }

}

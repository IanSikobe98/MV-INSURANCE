import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { Platform,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mcsel2',
  templateUrl: './mcsel2.page.html',
  styleUrls: ['./mcsel2.page.scss'],
})
export class Mcsel2Page implements OnInit {
  data: any;
  info: any;

  constructor(public LoadingController:LoadingController,private popover:PopoverController,public navCtrl: NavController, private route: ActivatedRoute,private router: Router)
   {

    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      console.log(this.data);
      
    })


    }

    back(){
      this.router.navigate(['mcsel']);
     }

     policy(i){

      this.route.queryParams.subscribe(params =>{
        console.log('params: ', params);
        
        this.info = JSON.parse(params.veh);
        console.log(this.info);
      
        
        
        })

      let navigationExtras : NavigationExtras = {
        queryParams:{
        veh : JSON.stringify(this.info[i]),
        
        
        }
        
        }

        this.router.navigate(['/drivform'],navigationExtras); 
     }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {

  // vrno :string
  // vhype : number

data :any
type :any
vehicle :any
rate :any
amount :any
policy:any



  constructor(public navCtrl: NavController,private route: ActivatedRoute,private router: Router) { 


    // this.vrno='';
    // this.vhype ;

    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      console.log(this.data);
      
      
      
      })
  }


  filldriv(){
    this.policy = {
      vehicle: this.data.Message,
      type:this.data.data.choices[0].type,
      amount:this.data.data.choices[0].amount,
      rate:this.rate = this.data.data.choices[0].rate
      
    }
    let navigationExtras : NavigationExtras = {
      queryParams:{
      veh : JSON.stringify(this.policy),
      
      
      }
      
      }
      this.router.navigate(['/valuation'],navigationExtras);

  }
  filldriv1(){
    this.policy = {
      vehicle: this.data.Message,
      type:this.data.data.choices[1].type,
      amount:this.data.data.choices[1].amount,
      rate:this.rate = this.data.data.choices[1].rate
      
    }
   
    let navigationExtras : NavigationExtras = {
      queryParams:{
      veh : JSON.stringify(this.policy),
      
      
      }
      
      }
      this.router.navigate(['/valuation'],navigationExtras);

  }
  filldriv2(){
    
    this.policy = {
      vehicle: this.data.Message,
      type:this.data.data.choices[2].type,
      amount:this.data.data.choices[2].amount,
      rate:this.rate = this.data.data.choices[2].rate
      
    }
   
    let navigationExtras : NavigationExtras = {
      queryParams:{
      veh : JSON.stringify(this.policy),
      
      
      }
      
      }

      this.router.navigate(['/valuation'],navigationExtras);

  }
    

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/tabs/home']);
   }

}

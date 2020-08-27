import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.page.html',
  styleUrls: ['./valuation.page.scss'],
})
export class ValuationPage implements OnInit {

data :any
type :string
vehicle :string
rate :number
amount :number
policy:any
valuation:string

  constructor(public navCtrl: NavController,private route: ActivatedRoute,private router: Router) { 

    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      console.log(this.data);
      
      
      
      })

  }
  filldriv(){
this.valuation ="Yes"

this.policy = {
  vehicle: this.data.vehicle,
  type:this.data.type,
  amount:this.data.amount,
  rate:this.rate = this.data.rate,
  valuation:this.valuation
  
}
let navigationExtras : NavigationExtras = {
  queryParams:{
  veh : JSON.stringify(this.policy),
  
  
  }
  
  }
  this.router.navigate(['/benefits'],navigationExtras);


  };
  filldriv1(){
    this.valuation ="No"
    

    this.policy = {
      vehicle: this.data.vehicle,
      type:this.data.type,
      amount:this.data.amount,
      rate:this.rate = this.data.rate,
      valuation:this.valuation
      
    }
    let navigationExtras : NavigationExtras = {
      queryParams:{
      veh : JSON.stringify(this.policy),
      
      
      }
      
      }
      this.router.navigate(['/benefits'],navigationExtras);
  };
  
  back(){

        this.router.navigate(['policies']);
  }
  ngOnInit() {
  }

}

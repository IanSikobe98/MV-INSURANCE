import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  text ="Ionic food eat"

  
  constructor(public navCtrl: NavController,private router: Router) {}

faqs(){
  this.router.navigate(['faq']);
}

contact(){
  this.router.navigate(['contact']);
}

who(){
  this.router.navigate(['whowe']);
}

}

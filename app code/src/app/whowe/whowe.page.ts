import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whowe',
  templateUrl: './whowe.page.html',
  styleUrls: ['./whowe.page.scss'],
})
export class WhowePage implements OnInit {

  constructor(public navCtrl: NavController,private router: Router) { }
  back(){
    this.navCtrl.pop;
    // this.router.navigate(['tabs/tabs/tabs2']);
   }
  ngOnInit() {
  }

}

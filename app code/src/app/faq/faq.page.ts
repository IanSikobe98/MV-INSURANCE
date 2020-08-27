import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  back(){
    this.navCtrl.pop;
    // this.router.navigate(['tabs/tabs/tabs2']);
   }
  ngOnInit() {
  }

}

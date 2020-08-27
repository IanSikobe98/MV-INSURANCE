import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public navCtrl: NavController,private router: Router) { 


  }

  back(){
    this.navCtrl.pop;
    // this.router.navigate(['tabs/tabs/tabs2']);
   }
  ngOnInit() {
  }

}

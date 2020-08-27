import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
import { GetinfoService } from '../services/getinfo/getinfo.service';
import { NavigationExtras } from '@angular/router';
import { WaitService } from '../services/wait/wait.service';

// import { InAppBrowser } from '@ionic-native/in-app-browser'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

users: any;
userp: any;


open(){
  window.open("http://facebook.com",'_system', 'location=yes');
}
open2(){
  window.open("http://instagram.com",'_system', 'location=yes');
}
open3(){
  window.open("http://twitter.com",'_system', 'location=yes');
}

//trial2
data: {

  // status:any;
  // message:String;
  // fname:String;
  // sname: String;
  // natid: any;
  choice: String;
}
  data2: { status: any; message: any; fname: any; sname: any; natid: any; choice: string; };
  constructor(private WaitService : WaitService,public navCtrl: NavController, private storage:Storage, private GetinfoService: GetinfoService) { 
    this.GetinfoService.getToken().then( (token)=>{
      // const wait = await this.WaitService.waitline();
      this.userp = (JSON.parse(token));
      console.log(this.userp)
    });
  //  console.log(this.userp);
   
   
   //trial 2 
   this.data = {
  //   status:'',
  //   message: '',
  //   fname:'',
  //   sname:'',
  //   natid: '',
    choice:''
  };
   

  }

  // ionviewDidLoad(){
  //   this.GetinfoService.getToken().then((token)=>{
  //     this.userp = (JSON.parse(token));
  //     console.log(this.userp)
  //   });
  //  console.log(this.userp);
  // }

filldata(){
  this.GetinfoService.getToken().then((token)=>{
    this.userp = (JSON.parse(token));
    console.log(this.userp)
  });
 console.log(this.userp.fname);
 console.log(this.userp.fname);
 let navigationExtras : NavigationExtras = {
  queryParams:{
  veh : JSON.stringify(this.userp),
  
  
  }
  
  }

  this.navCtrl.navigateForward(['/regform1'],  navigationExtras);



}


choice1(){

  // this.GetinfoService.getToken().then((token)=>{
  //   this.userp = (JSON.parse(token));
  //   console.log(this.userp)
  // });
//  console.log(this.userp.fname);

//  console.log(this.userp.natid);
//  this.data = {
  // status:this.userp.status,
  // message:this.userp.message,
  // fname:this.userp.fname,
  // sname:this.userp.sname,
  // natid:this.userp.natid,
  // choice:"Motorcycle"
// };

// console.log(this.data);
// console.log(this.data)
// console.log(this.data.fname)
//  let navigationExtras : NavigationExtras = {
//   queryParams:{
//   veh : JSON.stringify(this.data),
  
  
// //   }
  
//   }

  this.navCtrl.navigateForward(['/vehsel']);
  // this.navCtrl.navigateForward(['/vehsel'],  navigationExtras);
}

choice2(){
//   this.GetinfoService.getToken().then((token)=>{
//     this.userp = (JSON.parse(token));
//     console.log(this.userp)
//   });
// //  console.log(this.userp.fname);

// //  console.log(this.userp.natid);
//  this.data = {
  // status:this.userp.status,
  // message:this.userp.message,
  // fname:this.userp.fname,
  // sname:this.userp.sname,
  // natid:this.userp.natid,
//   choice:"Motorcycle"
// };

// console.log(this.data);
// console.log(this.data)
// console.log(this.data.fname)
//  let navigationExtras : NavigationExtras = {
//   queryParams:{
//   veh : JSON.stringify(this.data),
  
  
// //   }
  
//   }

  this.navCtrl.navigateForward(['/mcsel']);


}

slidesDidLoad(slides) {
  slides.startAutoplay();
}


  ngOnInit() {
  }

}

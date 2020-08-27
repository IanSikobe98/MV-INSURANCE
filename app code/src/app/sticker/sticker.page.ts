import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { WaitService } from '../services/wait/wait.service';
import { LoadingService } from '../services/loading/loading.service';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { PopdownPageModule } from '../popdown/popdown.module';
import { PopdownPage } from '../popdown/popdown.page';
import { PopnotdownPage } from '../popnotdown/popnotdown.page';
@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.page.html',
  styleUrls: ['./sticker.page.scss'],
})
export class StickerPage implements OnInit {
  data: any;
  fileName:string;

  constructor(private popover:PopoverController,private  LoadingService : LoadingService ,private WaitService : WaitService,private route: ActivatedRoute,private router: Router,    private fileOpener : FileOpener,
    public navCtrl: NavController,
    private file:File) { 

    this.route.queryParams.subscribe(params =>{
      console.log('params: ', params);
      
      this.data = JSON.parse(params.veh);
      console.log(this.data);
      console.log(this.data);
   
    })

    

  }



  generatePdf(){
    this.LoadingService.present("Downloading Sticker....");
    const div = document.getElementById("Html2Pdf");
    const options = {background:"white",height :div.clientHeight , width : div.clientWidth  };
    domtoimage.toPng(div,options).then((canvas)=>{
      //Initialize JSPDF
      var doc = new jsPDF("p","mm","a4");
      //Converting canvas to Image
      // let imgData = canvas.toDataURL("image/PNG");
      //Add image Canvas to PDF

      // doc.addImage(canvas, 'PNG', 20, 20, 240, 180);
      doc.addImage(canvas, 'PNG', 20, 20, 80, 50);
      // doc.addImage(imgData, 'PNG', 20,20 );
      let pdfOutput = doc.output();
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
      }


      //This is where the PDF file will stored , you can change it as you like
      // for more information please visit https://ionicframework.com/docs/native/file/
      const directory = this.file.externalApplicationStorageDirectory ;

      //Name of pdf
      // const fileName = this.fileName+".pdf";
      const ran= Math.floor((Math.random() * 1000000) + 1)+Math.floor((Math.random() * 100) + 1);

      const fileName = this.data[0].fname+ran+".pdf";
      //Writing File to Device
      this.file.writeFile(directory,fileName,buffer)
      .then((success) => {
     
        console.log("File created Succesfully" + JSON.stringify(success));
        //open File
        this.LoadingService.dismiss();
        this.popover.create({component:PopdownPage,showBackdrop:false}).then((popoverElement)=>{
          popoverElement.present();
        })
        this.fileOpener.open(success.nativeURL, "application/pdf")
        .then((success) =>{
         
          console.log("File Opened Succesfully" + JSON.stringify(success));
        })
        .catch((error)=> console.log("Cannot Open File " +JSON.stringify(error))); 
        
        
      })
      .catch((error)=>{
        this.LoadingService.dismiss();
        this.popover.create({component:PopnotdownPage,showBackdrop:false}).then((popoverElement)=>{
          popoverElement.present();
        })
      console.log("Cannot Create File " +JSON.stringify(error))
      
    });
  
  
    });
  }






  back(){
    this.router.navigate(['tabs/tabs/policysel']);
   }


  ngOnInit() {
  }

}

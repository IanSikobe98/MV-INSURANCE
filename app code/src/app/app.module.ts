import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Regform1Service } from './services/regForm1/regform1.service';
import { DrivformService } from './services/drivform/drivform.service';
import { HttpClientModule } from '@angular/common/http';

import {IonicStorageModule} from '@ionic/storage';
import { PopoverserverPageModule } from './popoverserver/popoverserver.module';

import { PopduplicPageModule } from './popduplic/popduplic.module';
import { Popduplic2PageModule } from './popduplic2/popduplic2.module';
import { PopsavePageModule } from './popsave/popsave.module';

import { Poppay1PageModule } from './poppay1/poppay1.module';
import { PoppaympPageModule } from './poppaymp/poppaymp.module';
import { Poppay2PageModule } from './poppay2/poppay2.module';
import { Poppay3PageModule } from './poppay3/poppay3.module';
import { PopprofPageModule } from './popprof/popprof.module';
import { PoppassPageModule } from './poppass/poppass.module';
import { PoploginPageModule } from './poplogin/poplogin.module';
import {PopdownPageModule} from './popdown/popdown.module';
import {PopnotdownPageModule} from './popnotdown/popnotdown.module';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), AppRoutingModule, HttpClientModule,PopoverserverPageModule,PopduplicPageModule,Popduplic2PageModule,PopsavePageModule,Poppay1PageModule,PoppaympPageModule,Poppay2PageModule,Poppay3PageModule,PopprofPageModule,PoppassPageModule,PoploginPageModule,PopdownPageModule,PopnotdownPageModule],
  providers: [
    File,
    FileOpener,
    StatusBar,
    SplashScreen,
    Regform1Service,
    DrivformService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

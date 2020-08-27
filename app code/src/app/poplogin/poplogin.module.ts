import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoploginPageRoutingModule } from './poplogin-routing.module';

import { PoploginPage } from './poplogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoploginPageRoutingModule
  ],
  declarations: [PoploginPage]
})
export class PoploginPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivformPageRoutingModule } from './drivform-routing.module';

import { DrivformPage } from './drivform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivformPageRoutingModule
  ],
  declarations: [DrivformPage]
})
export class DrivformPageModule {}

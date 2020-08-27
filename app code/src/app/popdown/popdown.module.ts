import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopdownPageRoutingModule } from './popdown-routing.module';

import { PopdownPage } from './popdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopdownPageRoutingModule
  ],
  declarations: [PopdownPage]
})
export class PopdownPageModule {}

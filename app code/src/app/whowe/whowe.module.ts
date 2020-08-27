import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhowePageRoutingModule } from './whowe-routing.module';

import { WhowePage } from './whowe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhowePageRoutingModule
  ],
  declarations: [WhowePage]
})
export class WhowePageModule {}

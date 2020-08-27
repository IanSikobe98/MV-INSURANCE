import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopnotdownPageRoutingModule } from './popnotdown-routing.module';

import { PopnotdownPage } from './popnotdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopnotdownPageRoutingModule
  ],
  declarations: [PopnotdownPage]
})
export class PopnotdownPageModule {}

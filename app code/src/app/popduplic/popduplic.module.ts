import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopduplicPageRoutingModule } from './popduplic-routing.module';

import { PopduplicPage } from './popduplic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopduplicPageRoutingModule
  ],
  declarations: [PopduplicPage]
})
export class PopduplicPageModule {}

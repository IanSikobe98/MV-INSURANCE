import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vehsel2PageRoutingModule } from './vehsel2-routing.module';

import { Vehsel2Page } from './vehsel2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vehsel2PageRoutingModule
  ],
  declarations: [Vehsel2Page]
})
export class Vehsel2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Poppay1PageRoutingModule } from './poppay1-routing.module';

import { Poppay1Page } from './poppay1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Poppay1PageRoutingModule
  ],
  declarations: [Poppay1Page]
})
export class Poppay1PageModule {}

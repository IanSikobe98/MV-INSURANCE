import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Poppay2PageRoutingModule } from './poppay2-routing.module';

import { Poppay2Page } from './poppay2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Poppay2PageRoutingModule
  ],
  declarations: [Poppay2Page]
})
export class Poppay2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mcsel2PageRoutingModule } from './mcsel2-routing.module';

import { Mcsel2Page } from './mcsel2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mcsel2PageRoutingModule
  ],
  declarations: [Mcsel2Page]
})
export class Mcsel2PageModule {}

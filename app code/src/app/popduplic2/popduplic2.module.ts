import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Popduplic2PageRoutingModule } from './popduplic2-routing.module';

import { Popduplic2Page } from './popduplic2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Popduplic2PageRoutingModule
  ],
  declarations: [Popduplic2Page]
})
export class Popduplic2PageModule {}

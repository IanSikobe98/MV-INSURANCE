import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopsavePageRoutingModule } from './popsave-routing.module';

import { PopsavePage } from './popsave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopsavePageRoutingModule
  ],
  declarations: [PopsavePage]
})
export class PopsavePageModule {}

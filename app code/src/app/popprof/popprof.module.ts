import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopprofPageRoutingModule } from './popprof-routing.module';

import { PopprofPage } from './popprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopprofPageRoutingModule
  ],
  declarations: [PopprofPage]
})
export class PopprofPageModule {}

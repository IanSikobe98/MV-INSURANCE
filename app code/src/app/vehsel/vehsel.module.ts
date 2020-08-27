import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehselPageRoutingModule } from './vehsel-routing.module';

import { VehselPage } from './vehsel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehselPageRoutingModule
  ],
  declarations: [VehselPage]
})
export class VehselPageModule {}

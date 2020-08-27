import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McselPageRoutingModule } from './mcsel-routing.module';

import { McselPage } from './mcsel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McselPageRoutingModule
  ],
  declarations: [McselPage]
})
export class McselPageModule {}

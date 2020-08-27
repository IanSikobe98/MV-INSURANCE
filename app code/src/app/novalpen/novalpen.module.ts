import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovalpenPageRoutingModule } from './novalpen-routing.module';

import { NovalpenPage } from './novalpen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovalpenPageRoutingModule
  ],
  declarations: [NovalpenPage]
})
export class NovalpenPageModule {}

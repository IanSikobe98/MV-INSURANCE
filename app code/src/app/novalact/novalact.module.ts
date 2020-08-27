import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovalactPageRoutingModule } from './novalact-routing.module';

import { NovalactPage } from './novalact.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovalactPageRoutingModule
  ],
  declarations: [NovalactPage]
})
export class NovalactPageModule {}

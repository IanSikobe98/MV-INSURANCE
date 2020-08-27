import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StylingPageRoutingModule } from './styling-routing.module';

import { StylingPage } from './styling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StylingPageRoutingModule
  ],
  declarations: [StylingPage]
})
export class StylingPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoppassPageRoutingModule } from './poppass-routing.module';

import { PoppassPage } from './poppass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoppassPageRoutingModule
  ],
  declarations: [PoppassPage]
})
export class PoppassPageModule {}

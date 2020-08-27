import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespassPageRoutingModule } from './respass-routing.module';

import { RespassPage } from './respass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespassPageRoutingModule
  ],
  declarations: [RespassPage]
})
export class RespassPageModule {}

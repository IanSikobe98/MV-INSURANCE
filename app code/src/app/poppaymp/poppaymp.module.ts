import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoppaympPageRoutingModule } from './poppaymp-routing.module';

import { PoppaympPage } from './poppaymp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoppaympPageRoutingModule
  ],
  declarations: [PoppaympPage]
})
export class PoppaympPageModule {}

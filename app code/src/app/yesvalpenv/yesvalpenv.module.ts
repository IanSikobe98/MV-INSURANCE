import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YesvalpenvPageRoutingModule } from './yesvalpenv-routing.module';

import { YesvalpenvPage } from './yesvalpenv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YesvalpenvPageRoutingModule
  ],
  declarations: [YesvalpenvPage]
})
export class YesvalpenvPageModule {}

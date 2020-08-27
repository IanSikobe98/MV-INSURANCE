import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YesvalpenpPageRoutingModule } from './yesvalpenp-routing.module';

import { YesvalpenpPage } from './yesvalpenp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YesvalpenpPageRoutingModule
  ],
  declarations: [YesvalpenpPage]
})
export class YesvalpenpPageModule {}

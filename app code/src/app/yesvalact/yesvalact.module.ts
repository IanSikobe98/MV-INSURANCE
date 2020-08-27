import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YesvalactPageRoutingModule } from './yesvalact-routing.module';

import { YesvalactPage } from './yesvalact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YesvalactPageRoutingModule
  ],
  declarations: [YesvalactPage]
})
export class YesvalactPageModule {}

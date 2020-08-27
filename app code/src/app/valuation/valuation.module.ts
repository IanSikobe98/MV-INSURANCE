import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuationPageRoutingModule } from './valuation-routing.module';

import { ValuationPage } from './valuation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuationPageRoutingModule
  ],
  declarations: [ValuationPage]
})
export class ValuationPageModule {}

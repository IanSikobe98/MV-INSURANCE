import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenefitsPageRoutingModule } from './benefits-routing.module';

import { BenefitsPage } from './benefits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenefitsPageRoutingModule
  ],
  declarations: [BenefitsPage]
})
export class BenefitsPageModule {}

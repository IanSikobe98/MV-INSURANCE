import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyselPageRoutingModule } from './policysel-routing.module';

import { PolicyselPage } from './policysel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyselPageRoutingModule
  ],
  declarations: [PolicyselPage]
})
export class PolicyselPageModule {}

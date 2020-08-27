import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverserverPageRoutingModule } from './popoverserver-routing.module';

import { PopoverserverPage } from './popoverserver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverserverPageRoutingModule
  ],
  declarations: [PopoverserverPage]
})
export class PopoverserverPageModule {}

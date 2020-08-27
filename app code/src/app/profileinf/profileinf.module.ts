import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileinfPageRoutingModule } from './profileinf-routing.module';

import { ProfileinfPage } from './profileinf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileinfPageRoutingModule
  ],
  declarations: [ProfileinfPage]
})
export class ProfileinfPageModule {}

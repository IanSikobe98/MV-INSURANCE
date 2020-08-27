import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileupdPageRoutingModule } from './profileupd-routing.module';

import { ProfileupdPage } from './profileupd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileupdPageRoutingModule
  ],
  declarations: [ProfileupdPage]
})
export class ProfileupdPageModule {}

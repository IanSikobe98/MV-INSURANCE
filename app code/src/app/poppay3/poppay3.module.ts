import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Poppay3PageRoutingModule } from './poppay3-routing.module';

import { Poppay3Page } from './poppay3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Poppay3PageRoutingModule
  ],
  declarations: [Poppay3Page]
})
export class Poppay3PageModule {}

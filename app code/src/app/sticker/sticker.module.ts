import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StickerPageRoutingModule } from './sticker-routing.module';

import { StickerPage } from './sticker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StickerPageRoutingModule
  ],
  declarations: [StickerPage]
})
export class StickerPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StickerPage } from './sticker.page';

const routes: Routes = [
  {
    path: '',
    component: StickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StickerPageRoutingModule {}

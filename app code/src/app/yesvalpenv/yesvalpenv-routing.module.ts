import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YesvalpenvPage } from './yesvalpenv.page';

const routes: Routes = [
  {
    path: '',
    component: YesvalpenvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YesvalpenvPageRoutingModule {}

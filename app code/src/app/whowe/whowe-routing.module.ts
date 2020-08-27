import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhowePage } from './whowe.page';

const routes: Routes = [
  {
    path: '',
    component: WhowePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhowePageRoutingModule {}

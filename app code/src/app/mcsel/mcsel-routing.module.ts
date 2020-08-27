import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McselPage } from './mcsel.page';

const routes: Routes = [
  {
    path: '',
    component: McselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McselPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopdownPage } from './popdown.page';

const routes: Routes = [
  {
    path: '',
    component: PopdownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopdownPageRoutingModule {}

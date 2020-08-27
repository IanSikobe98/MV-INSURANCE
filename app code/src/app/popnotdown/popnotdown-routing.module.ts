import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopnotdownPage } from './popnotdown.page';

const routes: Routes = [
  {
    path: '',
    component: PopnotdownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopnotdownPageRoutingModule {}

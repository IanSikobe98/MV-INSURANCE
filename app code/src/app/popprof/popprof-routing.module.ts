import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopprofPage } from './popprof.page';

const routes: Routes = [
  {
    path: '',
    component: PopprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopprofPageRoutingModule {}

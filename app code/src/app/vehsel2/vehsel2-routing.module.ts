import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vehsel2Page } from './vehsel2.page';

const routes: Routes = [
  {
    path: '',
    component: Vehsel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vehsel2PageRoutingModule {}

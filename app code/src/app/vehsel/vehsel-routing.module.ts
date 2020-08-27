import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehselPage } from './vehsel.page';

const routes: Routes = [
  {
    path: '',
    component: VehselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehselPageRoutingModule {}

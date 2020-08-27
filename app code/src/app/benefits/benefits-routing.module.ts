import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenefitsPage } from './benefits.page';

const routes: Routes = [
  {
    path: '',
    component: BenefitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenefitsPageRoutingModule {}

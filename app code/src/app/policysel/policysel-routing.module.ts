import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyselPage } from './policysel.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyselPageRoutingModule {}

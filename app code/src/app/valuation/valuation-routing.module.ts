import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuationPage } from './valuation.page';

const routes: Routes = [
  {
    path: '',
    component: ValuationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuationPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Popduplic2Page } from './popduplic2.page';

const routes: Routes = [
  {
    path: '',
    component: Popduplic2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Popduplic2PageRoutingModule {}

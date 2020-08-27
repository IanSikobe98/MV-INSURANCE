import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mcsel2Page } from './mcsel2.page';

const routes: Routes = [
  {
    path: '',
    component: Mcsel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mcsel2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopsavePage } from './popsave.page';

const routes: Routes = [
  {
    path: '',
    component: PopsavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopsavePageRoutingModule {}

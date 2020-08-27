import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoppaympPage } from './poppaymp.page';

const routes: Routes = [
  {
    path: '',
    component: PoppaympPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoppaympPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransrepoPage } from './transrepo.page';

const routes: Routes = [
  {
    path: '',
    component: TransrepoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransrepoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovalpenPage } from './novalpen.page';

const routes: Routes = [
  {
    path: '',
    component: NovalpenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovalpenPageRoutingModule {}

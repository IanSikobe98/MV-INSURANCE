import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovalactPage } from './novalact.page';

const routes: Routes = [
  {
    path: '',
    component: NovalactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovalactPageRoutingModule {}

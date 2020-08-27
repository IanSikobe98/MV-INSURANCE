import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StylingPage } from './styling.page';

const routes: Routes = [
  {
    path: '',
    component: StylingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylingPageRoutingModule {}

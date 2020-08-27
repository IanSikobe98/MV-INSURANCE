import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverserverPage } from './popoverserver.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverserverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverserverPageRoutingModule {}

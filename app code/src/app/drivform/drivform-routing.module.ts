import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivformPage } from './drivform.page';

const routes: Routes = [
  {
    path: '',
    component: DrivformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrivformPageRoutingModule {}

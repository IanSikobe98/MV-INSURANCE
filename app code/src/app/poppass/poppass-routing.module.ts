import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoppassPage } from './poppass.page';

const routes: Routes = [
  {
    path: '',
    component: PoppassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoppassPageRoutingModule {}

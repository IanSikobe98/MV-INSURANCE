import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespassPage } from './respass.page';

const routes: Routes = [
  {
    path: '',
    component: RespassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespassPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Poppay2Page } from './poppay2.page';

const routes: Routes = [
  {
    path: '',
    component: Poppay2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Poppay2PageRoutingModule {}

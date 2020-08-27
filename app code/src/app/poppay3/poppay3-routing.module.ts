import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Poppay3Page } from './poppay3.page';

const routes: Routes = [
  {
    path: '',
    component: Poppay3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Poppay3PageRoutingModule {}

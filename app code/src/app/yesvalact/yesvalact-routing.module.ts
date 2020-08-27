import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YesvalactPage } from './yesvalact.page';

const routes: Routes = [
  {
    path: '',
    component: YesvalactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YesvalactPageRoutingModule {}

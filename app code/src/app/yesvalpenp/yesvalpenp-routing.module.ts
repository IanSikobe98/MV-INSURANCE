import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YesvalpenpPage } from './yesvalpenp.page';

const routes: Routes = [
  {
    path: '',
    component: YesvalpenpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YesvalpenpPageRoutingModule {}

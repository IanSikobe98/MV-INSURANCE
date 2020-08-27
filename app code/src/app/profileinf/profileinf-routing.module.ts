import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileinfPage } from './profileinf.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileinfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileinfPageRoutingModule {}

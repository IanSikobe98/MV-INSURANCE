import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileupdPage } from './profileupd.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileupdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileupdPageRoutingModule {}

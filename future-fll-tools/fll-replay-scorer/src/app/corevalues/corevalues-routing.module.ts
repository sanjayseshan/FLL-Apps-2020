import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorevaluesPage } from './corevalues.page';

const routes: Routes = [
  {
    path: '',
    component: CorevaluesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorevaluesPageRoutingModule {}

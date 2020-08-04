import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimersPage } from './timers.page';

const routes: Routes = [
  {
    path: '',
    component: TimersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimersPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobotdesignPage } from './robotdesign.page';

const routes: Routes = [
  {
    path: '',
    component: RobotdesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobotdesignPageRoutingModule {}

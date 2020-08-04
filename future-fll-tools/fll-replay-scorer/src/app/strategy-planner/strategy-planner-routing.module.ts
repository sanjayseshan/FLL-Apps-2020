import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrategyPlannerPage } from './strategy-planner.page';

const routes: Routes = [
  {
    path: '',
    component: StrategyPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrategyPlannerPageRoutingModule {}

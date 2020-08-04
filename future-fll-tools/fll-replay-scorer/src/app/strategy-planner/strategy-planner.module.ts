import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrategyPlannerPageRoutingModule } from './strategy-planner-routing.module';

import { StrategyPlannerPage } from './strategy-planner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrategyPlannerPageRoutingModule
  ],
  declarations: [StrategyPlannerPage]
})
export class StrategyPlannerPageModule {}

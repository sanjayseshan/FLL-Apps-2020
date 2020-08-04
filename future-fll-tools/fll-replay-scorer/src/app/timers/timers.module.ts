import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimersPageRoutingModule } from './timers-routing.module';

import { TimersPage } from './timers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimersPageRoutingModule
  ],
  declarations: [TimersPage]
})
export class TimersPageModule {}

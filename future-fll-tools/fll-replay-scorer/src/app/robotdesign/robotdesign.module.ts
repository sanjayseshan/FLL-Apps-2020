import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobotdesignPageRoutingModule } from './robotdesign-routing.module';

import { RobotdesignPage } from './robotdesign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobotdesignPageRoutingModule
  ],
  declarations: [RobotdesignPage]
})
export class RobotdesignPageModule {}

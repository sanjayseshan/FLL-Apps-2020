import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorevaluesPageRoutingModule } from './corevalues-routing.module';

import { CorevaluesPage } from './corevalues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorevaluesPageRoutingModule
  ],
  declarations: [CorevaluesPage]
})
export class CorevaluesPageModule {}

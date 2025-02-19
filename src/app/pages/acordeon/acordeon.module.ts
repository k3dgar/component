import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcordeonPageRoutingModule } from './acordeon-routing.module';

import { AcordeonPage } from './acordeon.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcordeonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AcordeonPage]
})
export class AcordeonPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitpanePageRoutingModule } from './splitpane-routing.module';

import { SplitpanePage } from './splitpane.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitpanePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SplitpanePage]
})
export class SplitpanePageModule {}

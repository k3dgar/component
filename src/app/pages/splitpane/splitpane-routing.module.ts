import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitpanePage } from './splitpane.page';

const routes: Routes = [
  {
    path: '',
    component: SplitpanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitpanePageRoutingModule {}

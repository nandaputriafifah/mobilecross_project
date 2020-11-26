import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBatikPage } from './detail-batik.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBatikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBatikPageRoutingModule {}

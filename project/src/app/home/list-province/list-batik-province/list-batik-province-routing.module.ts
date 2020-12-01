import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBatikProvincePage } from './list-batik-province.page';

const routes: Routes = [
  {
    path: '',
    component: ListBatikProvincePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBatikProvincePageRoutingModule {}

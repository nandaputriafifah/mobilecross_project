import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProvincePage } from './list-province.page';

const routes: Routes = [
  {
    path: '',
    component: ListProvincePage
  },
  {
    path: ':province_id',
    loadChildren: () => import('./list-batik-province/list-batik-province.module').then( m => m.ListBatikProvincePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProvincePageRoutingModule {}

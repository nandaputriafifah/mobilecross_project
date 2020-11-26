import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBatikPage } from './list-batik.page';

const routes: Routes = [
  {
    path: '',
    component: ListBatikPage
  },
  {
    path: ':batik_id',
    loadChildren: () => import('./detail-batik/detail-batik.module').then( m => m.DetailBatikPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBatikPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBatikPage } from './list-batik.page';

const routes: Routes = [
  {
    path: '',
    component: ListBatikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBatikPageRoutingModule {}

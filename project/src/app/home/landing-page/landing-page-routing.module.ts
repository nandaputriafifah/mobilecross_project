import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPagePage } from './landing-page.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPagePage
  },
  {
    path: ':batik_id',
    loadChildren: () => import('./list-batik/list-batik.module').then( m => m.ListBatikPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPagePageRoutingModule {}

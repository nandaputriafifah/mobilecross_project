import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage
  },
  {
    path: 'game-detail',
    loadChildren: () => import('./game-detail/game-detail.module').then( m => m.GameDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}

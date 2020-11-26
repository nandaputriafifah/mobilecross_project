import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'landing-page',
        loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
      },
        {
            path: 'games',
            loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
        },
        {
            path: 'leaderboard',
            loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
        },
        {
            path: 'profile',
            loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
        }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },  {
    path: 'list-batik',
    loadChildren: () => import('./list-batik/list-batik.module').then( m => m.ListBatikPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

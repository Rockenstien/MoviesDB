import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './components/auth/auth.guard';
import { AnimeDetailsComponent } from './components/home/anime-details/anime-details.component';
import { AnimeComponent } from './components/home/anime/anime.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'anime',
        component: AnimeComponent
      },
      {
        path: 'anime/:anime-search',
        component: AnimeComponent
        
      },
      {
        path: 'anime-details/:mal-id',
        component: AnimeDetailsComponent,
        canActivate: [AuthGuard]
      }
    ],
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

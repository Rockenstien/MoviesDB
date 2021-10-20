import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        component: AnimeComponent,
        
      },
      {
        path: 'anime-details/:mal-id',
        component: AnimeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

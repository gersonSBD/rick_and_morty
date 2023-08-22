import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersLayoutComponent } from './components/characters-layout/characters-layout.component';
import { LocationsLayoutComponent } from './components/locations-layout/locations-layout.component';
import { EpisodesLayoutComponent } from './components/episodes-layout/episodes-layout.component';
import { CharacterDetailComponent } from 'src/app/components/molecules/character-detail/character-detail.component';
import { LocationDetailComponent } from 'src/app/components/molecules/location-detail/location-detail.component';
import { EpisodeDetailComponent } from 'src/app/components/molecules/episode-detail/episode-detail.component';

const routes: Routes = [
  {
    path: 'characters',
    children: [
      {
        path: ':id',
        component: CharacterDetailComponent,
      },
      {
        path: '**',
        component: CharactersLayoutComponent,
      }
    ]
  },
  {
    path: 'locations',
    children: [
      {
        path: ':id',
        component: LocationDetailComponent,
      },
      {
        path: '**',
        component: LocationsLayoutComponent,
      }
    ]
  },
  {
    path: 'episodes',
    children: [
      {
        path: ':id',
        component: EpisodeDetailComponent,
      },
      {
        path: '**',
        component: EpisodesLayoutComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'characters',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTwoRoutingModule { }

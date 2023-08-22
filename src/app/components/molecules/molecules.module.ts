import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { CharacterComponent } from './character/character.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { AtomsModule } from '../atoms/atoms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationSimpleComponent } from './pagination-simple/pagination-simple.component';
import { PaginationFullComponent } from './pagination-full/pagination-full.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [
    FiltersComponent,
    PaginationSimpleComponent,
    PaginationFullComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent,
    EpisodeDetailComponent,
    LocationDetailComponent,
    CharacterDetailComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    AtomsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FiltersComponent,
    PaginationSimpleComponent,
    PaginationFullComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent,
  ],
})
export class MoleculesModule {}

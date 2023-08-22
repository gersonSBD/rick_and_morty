import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [CharactersComponent, LocationsComponent, EpisodesComponent],
  imports: [CommonModule, MoleculesModule],
  exports: [CharactersComponent, LocationsComponent, EpisodesComponent],
})
export class OrganismsModule {}

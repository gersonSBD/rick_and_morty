import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './page-two.component';
import { PageTwoRoutingModule } from './page-two-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { CharactersLayoutComponent } from './components/characters-layout/characters-layout.component';
import { LocationsLayoutComponent } from './components/locations-layout/locations-layout.component';
import { EpisodesLayoutComponent } from './components/episodes-layout/episodes-layout.component';

@NgModule({
  declarations: [
    PageTwoComponent, 
    CharactersLayoutComponent, 
    LocationsLayoutComponent, 
    EpisodesLayoutComponent
  ],
  imports: [
    CommonModule, 
    PageTwoRoutingModule, 
    ComponentsModule
  ],
})
export class PageTwoModule {}

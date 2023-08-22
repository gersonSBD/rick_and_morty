import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/https/characters.service';
import { ICharacter } from 'src/app/shared/interfaces/character.interface';
import { IFilterCharacter } from 'src/app/shared/interfaces/filter-character.interface';
import { IPagination } from 'src/app/shared/interfaces/pagination.interface';
import { IResponse } from 'src/app/shared/interfaces/reponse.interface';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-characters-layout',
  templateUrl: './characters-layout.component.html',
  styleUrls: ['./characters-layout.component.scss']
})
export class CharactersLayoutComponent {

  characters: ICharacter[] = [];

  pagination?: IPagination;

  filtersCharacters?: IFilterCharacter;

  page = 1;

  constructor(private _charactersService: CharactersService) {
    this.setCharacters();
  }

  async setCharacters(): Promise<void> {
    LoadingBarService.emmitLoading(true);
    await this._charactersService
      .filter(this.filterParams())
      .then((response: IResponse) => {
        this.characters = response?.results || [];
        this.pagination = response?.info;
      })
      .catch(() => {
        this.characters = [];
        this.pagination = undefined;
      });
    LoadingBarService.emmitLoading(false);
  }

  handlerFiltersCharacters(filters: IFilterCharacter): void {
    this.filtersCharacters = filters;
    this.page = 1;
    this.setCharacters();
  }

  handlerChangePage(value: number): void {
    this.page = value;
    this.setCharacters();
  }

  private filterParams(): HttpParams {
    return new HttpParams()
    .set('name', this.filtersCharacters?.name || '')
    .set('status', this.filtersCharacters?.status || '')
    .set('page', this.page);
  }

}

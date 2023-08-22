import { Component } from '@angular/core';
import { ICharacter } from '../../shared/interfaces/character.interface';
import { IFilterCharacter } from '../../shared/interfaces/filter-character.interface';
import { CharactersService } from '../../shared/https/characters.service';
import { arrayNumberByRange } from '../../shared/utils/numbers.utils';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent {
  charactersPerPage: ICharacter[] = [];

  totalCharacters = 0;

  filtersCharacters?: IFilterCharacter;

  page = 1;

  size = 12;

  constructor(private _charactersService: CharactersService) {
    this.setCharacters();
  }

  async setCharacters(): Promise<void> {
    await this.setTotalCharacters();
    await this.setCharactersPerPage();
  }

  async setTotalCharacters(): Promise<void> {
    await this._charactersService
      .getAll()
      .then((response) => {
        this.totalCharacters = response?.info.count;
      })
      .catch(() => {
        this.totalCharacters = 0;
      });
  }

  async setCharactersPerPage(): Promise<void> {
    await this._charactersService
      .filterByIds(this.getIdsCharacters)
      .then((response: Array<ICharacter>) => {
        this.charactersPerPage = response;
      })
      .catch(() => {
        this.charactersPerPage = [];
      });
  }

  handlerChangePage(value: number): void {
    this.page = value;
    this.setCharactersPerPage();
  }

  private get getIdsCharacters(): number[] {
    const start = this.page === 1 ? 1 : this.size * (this.page - 1) + 1;
    let end = this.size * this.page;
    end = end <= this.totalCharacters ? end : this.totalCharacters;
    const ids = arrayNumberByRange(start, end, 1);
    return ids;
  }
}

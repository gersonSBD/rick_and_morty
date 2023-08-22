import { Component } from '@angular/core';
import { ICharacter } from '../../shared/interfaces/character.interface';
import { IPagination } from '../../shared/interfaces/pagination.interface';
import { IFilterCharacter } from '../../shared/interfaces/filter-character.interface';
import { CharactersService } from '../../shared/https/characters.service';
import { LoadingBarService } from '../../shared/services/loading-bar.service';
import { IResponse } from '../../shared/interfaces/reponse.interface';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent  {

  
}

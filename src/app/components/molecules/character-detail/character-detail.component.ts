import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/https/characters.service';
import { ICharacter } from 'src/app/shared/interfaces/character.interface';
import { IResponse } from 'src/app/shared/interfaces/reponse.interface';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  id: string = '';
  character?: ICharacter;
  constructor(
    private route: ActivatedRoute,
    private _charactersService: CharactersService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')??'';
    this.getCharacter();
  }

  async getCharacter(): Promise<void> {
    LoadingBarService.emmitLoading(true);
    await this._charactersService.filterById(this.id)
      .then((response: ICharacter) => {
        this.character = response;
        console.log(this.character);
      })
      .catch(() => {
        this.character = undefined;
      });
    LoadingBarService.emmitLoading(false);
  }

}

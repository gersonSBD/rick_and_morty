import { Component, Input } from '@angular/core';
import { ICharacter } from '../../../shared/interfaces/character.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  @Input() characters: ICharacter[] = [];

  constructor(private router: Router) {}

  goToDetail(character: ICharacter): void {
    const characterId = character ? character.id : null;
    this.router.navigate(['dashboard/characters',  characterId]);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../constants/endpoints.constant';
import { HttpService } from './http.service';
import { ICharacter } from '../interfaces/character.interface';
import { IResponse } from '../interfaces/reponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends HttpService<IResponse> {
  constructor(private _httpClient: HttpClient) {
    super();
    this.httpClient = _httpClient;
    this.apiUrl = ENDPOINTS.characters;
  }

  async filterByIds(ids: string[]): Promise<Array<ICharacter>> {
    const url = this.apiUrl + ids?.join(',');
    return this.httpClient?.get<any>(url).toPromise();
  }

  async filterById(id: string): Promise<ICharacter> {
    const url = this.apiUrl + id;
    return this.httpClient?.get<any>(url).toPromise();
  }
}

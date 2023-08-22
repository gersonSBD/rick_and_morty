import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IResponse } from '../interfaces/reponse.interface';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints.constant';
import { IEpisode } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService extends HttpService<IResponse>{

  constructor(private _httpClient: HttpClient) {
    super();
    this.httpClient = _httpClient;
    this.apiUrl = ENDPOINTS.episodes;
  }

  async filterById(ids: string): Promise<IEpisode> {
    const url = this.apiUrl + ids;
    return this.httpClient?.get<any>(url).toPromise();
  }
}

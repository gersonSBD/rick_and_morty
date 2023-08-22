import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../interfaces/reponse.interface';
import { HttpService } from './http.service';
import { ENDPOINTS } from '../constants/endpoints.constant';
import { ILocation } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService extends HttpService<IResponse>{

  constructor(private _httpClient: HttpClient) {
    super();
    this.httpClient = _httpClient;
    this.apiUrl = ENDPOINTS.locations;
  }

  async filterById(id: string): Promise<ILocation> {
    const url = this.apiUrl + id;
    return this.httpClient?.get<any>(url).toPromise();
  }
}

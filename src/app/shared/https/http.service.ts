import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> {
  httpClient?: HttpClient;

  apiUrl = '';

  async filter(params: HttpParams): Promise<T> {
    return this.httpClient?.get<any>(this.apiUrl, { params }).toPromise();
  }

  async getAll(): Promise<T> {
    return this.httpClient?.get<any>(this.apiUrl).toPromise();
  }
}

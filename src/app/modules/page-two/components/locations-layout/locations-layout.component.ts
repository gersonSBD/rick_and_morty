import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/shared/https/locations.service';
import { IFilterLocation } from 'src/app/shared/interfaces/filter-location.interface';
import { ILocation } from 'src/app/shared/interfaces/location.interface';
import { IPagination } from 'src/app/shared/interfaces/pagination.interface';
import { IResponse } from 'src/app/shared/interfaces/reponse.interface';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-locations-layout',
  templateUrl: './locations-layout.component.html',
  styleUrls: ['./locations-layout.component.scss']
})
export class LocationsLayoutComponent {

  showStatusFilter = false;

  locations: ILocation[] = [];

  pagination?: IPagination;

  filtersLocations?: IFilterLocation;

  page = 1;

  constructor(private _locationsService: LocationsService) {
    this.setLocations();
  }

  async setLocations(): Promise<void> {
    LoadingBarService.emmitLoading(true);
    await this._locationsService
      .filter(this.filterParams())
      .then((response: IResponse) => {
        this.locations = response?.results || [];
        this.pagination = response?.info;
      })
      .catch(() => {
        this.locations = [];
        this.pagination = undefined;
      });
    LoadingBarService.emmitLoading(false);
  }

  handlerFiltersLocations(filters: IFilterLocation): void {
    this.filtersLocations = filters;
    this.page = 1;
    this.setLocations();
  }

  handlerChangePage(value: number): void {
    this.page = value;
    this.setLocations();
  }

  private filterParams(): HttpParams {
    return new HttpParams()
    .set('name', this.filtersLocations?.name || '')
    .set('status', this.filtersLocations?.status || '')
    .set('page', this.page);
  }

}

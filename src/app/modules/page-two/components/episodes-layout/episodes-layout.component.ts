import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/shared/https/episodes.service';
import { IEpisode } from 'src/app/shared/interfaces/episode.interface';
import { IFilterEpisode } from 'src/app/shared/interfaces/filter-episode.interface';
import { ILocation } from 'src/app/shared/interfaces/location.interface';
import { IPagination } from 'src/app/shared/interfaces/pagination.interface';
import { IResponse } from 'src/app/shared/interfaces/reponse.interface';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-episodes-layout',
  templateUrl: './episodes-layout.component.html',
  styleUrls: ['./episodes-layout.component.scss']
})
export class EpisodesLayoutComponent {

  showStatusFilter = false;

  episodes: IEpisode[] = [];

  pagination?: IPagination;

  filtersEpisodes?: IFilterEpisode;

  page = 1;

  constructor(private _episodesService: EpisodesService) {
    this.setEpisodes();
  }

  async setEpisodes(): Promise<void> {
    LoadingBarService.emmitLoading(true);
    await this._episodesService
      .filter(this.filterParams())
      .then((response: IResponse) => {
        this.episodes = response?.results || [];
        this.pagination = response?.info;
      })
      .catch(() => {
        this.episodes = [];
        this.pagination = undefined;
      });
    LoadingBarService.emmitLoading(false);
  }

  handlerFiltersEpisodes(filters: IFilterEpisode): void {
    this.filtersEpisodes = filters;
    this.page = 1;
    this.setEpisodes();
  }

  handlerChangePage(value: number): void {
    this.page = value;
    this.setEpisodes();
  }

  private filterParams(): HttpParams {
    return new HttpParams()
    .set('name', this.filtersEpisodes?.name || '')
    .set('status', this.filtersEpisodes?.status || '')
    .set('page', this.page);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from 'src/app/shared/https/episodes.service';
import { IEpisode } from 'src/app/shared/interfaces/episode.interface';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {
  id: string = '';
  episode?: IEpisode;
  constructor(
    private route: ActivatedRoute,
    private _episodesService: EpisodesService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')??'';
    this.getEpisode();
  }

  async getEpisode(): Promise<void> {
    LoadingBarService.emmitLoading(true);
    await this._episodesService.filterById(this.id)
      .then((response: IEpisode) => {
        this.episode = response;
      })
      .catch(() => {
        this.episode = undefined;
      });
    LoadingBarService.emmitLoading(false);
  }

}

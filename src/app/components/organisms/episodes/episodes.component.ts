import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEpisode } from 'src/app/shared/interfaces/episode.interface';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  @Input() episodes: IEpisode[] = [];
  constructor(private router: Router) {}

  goToDetail(episode: IEpisode): void {
    const episodeId = episode ? episode.id : null;
    this.router.navigate(['dashboard/episodes',  episodeId]);
  }
}

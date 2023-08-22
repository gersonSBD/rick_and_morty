import { Component, Input } from '@angular/core';
import { IEpisode } from 'src/app/shared/interfaces/episode.interface';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  @Input() episode?: IEpisode;
  constructor() { }
}

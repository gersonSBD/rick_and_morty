import { Component, Input } from '@angular/core';
import { ILocation } from 'src/app/shared/interfaces/location.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  @Input() location?: ILocation;
  constructor() { }
}

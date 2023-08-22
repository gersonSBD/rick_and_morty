import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from 'src/app/shared/https/locations.service';
import { ILocation } from 'src/app/shared/interfaces/location.interface';
import { LoadingBarService } from 'src/app/shared/services/loading-bar.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  id: string = '';
  location?: ILocation;
  constructor(
    private route: ActivatedRoute,
    private _locationsService: LocationsService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')??'';
    this.getLocation();
  }

  async getLocation(): Promise<void> {
    LoadingBarService.emmitLoading(true);
    await this._locationsService.filterById(this.id)
      .then((response: ILocation) => {
        this.location = response;
        console.log(this.location);
      })
      .catch(() => {
        this.location = undefined;
      });
    LoadingBarService.emmitLoading(false);
  }

}

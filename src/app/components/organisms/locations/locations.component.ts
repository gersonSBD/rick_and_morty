import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILocation } from 'src/app/shared/interfaces/location.interface';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  @Input() locations: ILocation[] = [];
  constructor(private router: Router) {}

  goToDetail(location: ILocation): void {
    const locationId = location ? location.id : null;
    this.router.navigate(['dashboard/locations',  locationId]);
  }
}

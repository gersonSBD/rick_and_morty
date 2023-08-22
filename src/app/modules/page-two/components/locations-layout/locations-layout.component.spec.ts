import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsLayoutComponent } from './locations-layout.component';

describe('LocationsLayoutComponent', () => {
  let component: LocationsLayoutComponent;
  let fixture: ComponentFixture<LocationsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

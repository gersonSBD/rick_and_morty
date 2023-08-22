import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationFullComponent } from './pagination-full.component';

describe('PaginationFullComponent', () => {
  let component: PaginationFullComponent;
  let fixture: ComponentFixture<PaginationFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

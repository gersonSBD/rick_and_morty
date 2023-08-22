import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersLayoutComponent } from './characters-layout.component';

describe('CharactersLayoutComponent', () => {
  let component: CharactersLayoutComponent;
  let fixture: ComponentFixture<CharactersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

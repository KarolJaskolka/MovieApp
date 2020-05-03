import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRatingFloatingButtonComponent } from './movie-rating-floating-button.component';

describe('MovieRatingFloatingButtonComponent', () => {
  let component: MovieRatingFloatingButtonComponent;
  let fixture: ComponentFixture<MovieRatingFloatingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRatingFloatingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRatingFloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamenRatingsComponent } from './ramen-ratings.component';

describe('RamenRatingsComponent', () => {
  let component: RamenRatingsComponent;
  let fixture: ComponentFixture<RamenRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamenRatingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamenRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

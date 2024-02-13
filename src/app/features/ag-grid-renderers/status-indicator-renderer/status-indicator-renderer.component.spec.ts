import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusIndicatorRendererComponent } from './status-indicator-renderer.component';

describe('StatusIndicatorRendererComponent', () => {
  let component: StatusIndicatorRendererComponent;
  let fixture: ComponentFixture<StatusIndicatorRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusIndicatorRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusIndicatorRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

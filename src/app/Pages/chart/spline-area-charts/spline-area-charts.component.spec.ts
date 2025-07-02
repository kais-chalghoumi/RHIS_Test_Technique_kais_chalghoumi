import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplineAreaChartsComponent } from './spline-area-charts.component';

describe('SplineAreaChartsComponent', () => {
  let component: SplineAreaChartsComponent;
  let fixture: ComponentFixture<SplineAreaChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplineAreaChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplineAreaChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

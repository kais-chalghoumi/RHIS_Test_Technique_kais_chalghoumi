import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTwoChartComponent } from './bar-two-chart.component';

describe('BarTwoChartComponent', () => {
  let component: BarTwoChartComponent;
  let fixture: ComponentFixture<BarTwoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarTwoChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarTwoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

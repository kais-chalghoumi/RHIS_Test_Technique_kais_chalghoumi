import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplebarChartComponent } from './simplebar-chart.component';

describe('SimplebarChartComponent', () => {
  let component: SimplebarChartComponent;
  let fixture: ComponentFixture<SimplebarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplebarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimplebarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

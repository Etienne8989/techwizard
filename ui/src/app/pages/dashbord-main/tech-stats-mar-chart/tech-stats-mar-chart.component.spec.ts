import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStatsMarChartComponent } from './tech-stats-mar-chart.component';

describe('TechStatsMarChartComponent', () => {
  let component: TechStatsMarChartComponent;
  let fixture: ComponentFixture<TechStatsMarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechStatsMarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStatsMarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

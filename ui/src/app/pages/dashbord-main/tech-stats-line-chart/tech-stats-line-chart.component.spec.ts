import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStatsLineChartComponent } from './tech-stats-line-chart.component';

describe('TechStatsLineChartComponent', () => {
  let component: TechStatsLineChartComponent;
  let fixture: ComponentFixture<TechStatsLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechStatsLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechStatsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

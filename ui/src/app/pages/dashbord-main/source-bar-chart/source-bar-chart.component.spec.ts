import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceBarChartComponent } from './source-bar-chart.component';

describe('SourceBarChartComponent', () => {
  let component: SourceBarChartComponent;
  let fixture: ComponentFixture<SourceBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

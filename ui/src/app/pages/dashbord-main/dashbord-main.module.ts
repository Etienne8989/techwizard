import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {SourceBarChartComponent} from './source-bar-chart/source-bar-chart.component';
import {TechStatsMarChartComponent} from './tech-stats-mar-chart/tech-stats-mar-chart.component';
import {TechStatsLineChartComponent} from './tech-stats-line-chart/tech-stats-line-chart.component';


@NgModule({
  declarations: [HomeComponent, SearchBarComponent, SourceBarChartComponent, TechStatsMarChartComponent, TechStatsLineChartComponent],
  imports: [
    CommonModule
  ]
})
export class DashbordMainModule {
}

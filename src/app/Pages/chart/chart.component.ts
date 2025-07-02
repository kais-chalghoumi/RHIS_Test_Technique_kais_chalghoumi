import { Component } from '@angular/core';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SimplebarChartComponent } from './simplebar-chart/simplebar-chart.component';
import { BarTwoChartComponent } from './bar-two-chart/bar-two-chart.component';
import { SplineAreaChartsComponent } from './spline-area-charts/spline-area-charts.component';
import { BasicDonutChartComponent } from './basic-donut-chart/basic-donut-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@Component({
    selector: 'app-chart',
    imports: [
        AreaChartComponent,
        LineChartComponent,
        BarChartComponent,
        SimplebarChartComponent,
        BarTwoChartComponent,
        SplineAreaChartsComponent,
        BasicDonutChartComponent,
        DoughnutChartComponent
    ],
    templateUrl: './chart.component.html',
    styleUrl: './chart.component.scss'
})
export class ChartComponent {}

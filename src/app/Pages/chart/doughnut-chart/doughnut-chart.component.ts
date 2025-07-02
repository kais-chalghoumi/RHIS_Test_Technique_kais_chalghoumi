import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-doughnut-chart',
    imports: [],
    templateUrl: './doughnut-chart.component.html',
    styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent implements OnInit {

  ngOnInit(): void {
    const options = {
      chart: {
        height: 280,
        type: 'radialBar',
      },
      series: [67],
      colors: ['#6a69f5'],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#323a46',
            startAngle: -90,
            endAngle: 90,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: '20px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          gradientToColors: ['#6a69f5'],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'butt',
      },
      labels: ['Progress'],
    };

    new ApexCharts(document.querySelector('#doughnutchart'), options).render();
  }
}

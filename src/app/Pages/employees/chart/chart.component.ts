import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const options = {
      series: [
        {
          data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
      ],
      chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: false,
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      colors: ['#50cd89'],
      grid: {
        padding: {
          top: 5,
          bottom: 5,
          left: 5,
          right: 5,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: () => {
              return '';
            },
          },
        },
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }
}
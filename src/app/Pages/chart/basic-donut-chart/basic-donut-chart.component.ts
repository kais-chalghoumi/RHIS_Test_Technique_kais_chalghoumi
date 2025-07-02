import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-basic-donut-chart',
    imports: [],
    templateUrl: './basic-donut-chart.component.html',
    styleUrl: './basic-donut-chart.component.scss'
})
export class BasicDonutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const basicdonut = {
      series: [38.6, 22.5, 30.8, 8.1],
      chart: {
        height: 300,
        type: "donut",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        show: false,
      },
      labels: ["United States", "Canada", "Mexico", "Other"],
      colors: ["#6a69f5", "#323a46", "#50cd89", "#94989a"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
      legend: {
        position: "bottom",
      },
    };

    const chart = new ApexCharts(document.querySelector("#basicdonut"), basicdonut);
    chart.render();
  }
}

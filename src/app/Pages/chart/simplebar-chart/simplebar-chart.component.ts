import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-simplebar-chart',
    imports: [],
    templateUrl: './simplebar-chart.component.html',
    styleUrl: './simplebar-chart.component.scss'
})
export class SimplebarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const simplebarchart = {
      series: [
        {
          name: "Sales",
          data: [2500, 1500, 2000, 3000, 4000, 4500],
        },
      ],
      chart: {
        height: 300,
        type: "bar",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
      },
      colors: ["#6a69f5"],
      xaxis: {
        categories: ["Q1", "Q2", "Q3", "Q4", "Q5"],
        axisBorder: {
          color: "#e0e6ed",
        },
      },
      yaxis: {
        opposite: false,
        reversed: false,
      },
      grid: {
        borderColor: "#e8e8e8",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      fill: {
        opacity: 0.8,
      },
    };

    const chart = new ApexCharts(document.querySelector("#simplebarchart"), simplebarchart);
    chart.render();
  }
}

import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-bar-chart',
    imports: [],
    templateUrl: './bar-chart.component.html',
    styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const barchart = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14],
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#323a46", "#50cd89", "#6a69f5"],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          columnWidth: "25%",
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };

    const chart = new ApexCharts(document.querySelector("#barchart"), barchart);
    chart.render();
  }
}

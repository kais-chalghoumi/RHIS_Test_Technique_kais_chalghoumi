import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-bar-two-chart',
    imports: [],
    templateUrl: './bar-two-chart.component.html',
    styleUrl: './bar-two-chart.component.scss'
})
export class BarTwoChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const barchartcenter = {
      series: [
        {
          name: "Direct",
          data: [12.45, 16.2, 8.9, 11.42, 12.6, 17.1, 17.2, 14.16, 11.1],
        },
        {
          name: "Indirect",
          data: [
            -11.45, -15.42, -7.9, -12.42, -12.6, -17.1, -17.2, -14.16, -11.1,
          ],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
        },
      },
      colors: ["#323a46", "#6a69f5"],
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      yaxis: {
        labels: {
          formatter: function (y: number) { // Specify 'y' as type 'number'
            return y.toFixed(0) + "%";
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          rotate: -90,
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#barchartcenter"), barchartcenter);
    chart.render();
  }
}

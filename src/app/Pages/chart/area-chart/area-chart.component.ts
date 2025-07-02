import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-area-chart',
    imports: [],
    templateUrl: './area-chart.component.html',
    styleUrl: './area-chart.component.scss'
})
export class AreaChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const areachart = {
      series: [
        {
          name: "Income",
          data: [
            1680, 1680, 1550, 1780, 1550, 1700, 1900, 1600, 1500, 1700,
            1400, 1700,
          ],
        },
      ],
      chart: {
        type: "area",
        height: 300,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#94989a"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      xaxis: {
        axisBorder: {
          color: "#e0e6ed",
        },
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
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        opposite: false,
        labels: {
          offsetX: 0,
        },
      },
      legend: {
        horizontalAlign: "left",
      },
      grid: {
        borderColor: "#e8e8e8",
      },
    };

    const chart = new ApexCharts(document.querySelector("#areachart"), areachart);
    chart.render();
  }
}

import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-spline-area-charts',
    imports: [],
    templateUrl: './spline-area-charts.component.html',
    styleUrl: './spline-area-charts.component.scss'
})
export class SplineAreaChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      chart: {
        height: 350,
        type: "area",
        stacked: true,
        toolbar: {
          show: false,
          autoSelected: "zoom",
        },
      },
      colors: ["#6a69f5", "#323a46"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: [3, 3],
        dashArray: [0, 4],
        lineCap: "round",
      },
      grid: {
        borderColor: "#e8e8e8",
        padding: {
          left: 0,
          right: 0,
        },
        strokeDashArray: 4,
      },
      markers: {
        size: 0,
        hover: {
          size: 0,
        },
      },
      series: [
        {
          name: "New Visits",
          data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120],
        },
        {
          name: "Unique Visits",
          data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110],
        },
      ],
      xaxis: {
        type: "month",
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        axisBorder: {
          show: true,
          color: "#e8e8e8",
        },
        axisTicks: {
          show: true,
          color: "#e8e8e8",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.3,
          stops: [0, 90, 100],
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    };

    const chart = new ApexCharts(document.querySelector("#apex_area1"), options);
    chart.render();
  }
}


import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-line-chart',
    imports: [],
    templateUrl: './line-chart.component.html',
    styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const chartOptions = {
      chart: {
        height: 300,
        type: "area",
        fontFamily: "Inter, sans-serif",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Current Week",
          data: [50, 100, 200, 170, 250, 275, 280],
        },
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 3,
        lineCap: "square",
      },
      colors: ["#6a69f5"],
      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 4,
            fillColor: "#323a46",
            strokeColor: "#fff",
            size: 6,
          },
          {
            seriesIndex: 1,
            dataPointIndex: 5,
            fillColor: "#A8C5DA",
            strokeColor: "#fff",
            size: 6,
          },
        ],
      },
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: true,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: "12px",
            cssClass: "apexcharts-xaxis-title",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          offsetX: -10,
          offsetY: 0,
          style: {
            fontSize: "12px",
            cssClass: "apexcharts-yaxis-title",
          },
        },
        opposite: false,
      },
      grid: {
        borderColor: "#e8e8e8",
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [100, 100],
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#linechart"), chartOptions);
    chart.render();
  }
}


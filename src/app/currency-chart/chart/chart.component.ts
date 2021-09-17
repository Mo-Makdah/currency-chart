import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  
  constructor(private chartService: ChartService) { }

  // run on in init
  ngOnInit(): void {

    // render the chart
    this.renderChart();

    // get information from control-box

  }


  renderChart() {
    // chart options
    var options = {
      // chart properties
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'Bitcoin OLHC Chart',
        align: 'left'
      },
      xaxis: {
        type: 'date'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
      // chart data
      series: [{
        name: 'sales',
        data: [{
          x: new Date(2016, 1, 1).toLocaleDateString(),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 1, 2).toLocaleDateString(),
          y: [53.66, 54.99, 51.35, 52.95]
        },
        {
          x: new Date(2016, 1, 3).toLocaleDateString(),
          y: [52.76, 57.35, 52.15, 57.03]
        }]
      }],
  
    }

    // chart object construction and rendering
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    
  }

}

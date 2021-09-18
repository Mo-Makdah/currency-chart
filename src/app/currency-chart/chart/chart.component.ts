import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ChartData } from '../Interfaces/ChartData';
import { DayData } from '../Interfaces/DayData';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  // the data which we will fill our chart from
  chartData:ChartData[] = [];
  
  constructor(private chartService: ChartService) { }

  // run on in init
  ngOnInit(): void {

    // get data from the parent component which takes from search box

    // fetch days data and render
    this.getDaysData("btc-bitcsoin", "2018-02-03", "2018-04-03");

  }

  getDaysData(coinId:String, fromDate:String, toDate: String) {
    this.chartService
    .getDaysData(coinId, fromDate, toDate)
    .subscribe(
      (data:DayData[]) => {
        // clear the chartData from previous data       
        this.chartData = [];

        // fill the chartData with the data retrieved from the server
        for(var i = 0; i < data.length; i++){

          // parse data
          var dateString = data[i].time_open.toString();
          var dateObject = new Date(dateString);
          var open = data[i].open;
          var high = data[i].high;
          var low = data[i].low;
          var close = data[i].close;

          // create the data object and put it in the chartData array
          var chartDataObject = {
            x: dateObject,
            y: [open, high, low, close]
          };

          this.chartData.push(chartDataObject);
        }
        
        
        // render the new chart
        this.renderChart("Loading...");
      },
      // error handling
      (error) => {
        console.log(error);
        this.renderChart("Oops, Somthing Went Wrong");
      },
    );
  }

  renderChart(noDataMessage: String) {
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
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },

      // chart data
      series: [{
        name: 'sales',
        data: this.chartData,
        },
      ],
      // in case of no data
      noData: {
        text: noDataMessage,
        align: 'center',
        verticalAlign: 'middle',
        style: {
          fontSize: '20px',
        }
      }
  
    }

    // chart object construction and rendering
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();  
  }

}

// component imports
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { DayData } from '../Interfaces/DayData';
import { ChartData } from '../Interfaces/ChartData';

// apexcharts imports
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexNoData
} from "ng-apexcharts";

// apexcharts option types
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  title: ApexTitleSubtitle | any;
  noData: ApexNoData | any;
};

@Component({
  selector: 'app-chart-box',
  templateUrl: './chart-box.component.html',
  styleUrls: ['./chart-box.component.css']
})

export class ChartBoxComponent implements OnInit {
  
  // input variables
  @Input() coinId: string = "";
  @Input() fromDate: string = "";
  @Input() toDate: string = "";

  // chart variables
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  // data variable
  chartData:ChartData[] = [];
  coinName: string = "Some Name";
  

  constructor(private chartService: ChartService) {
    // chart options
    this.chartOptions = {
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
        name: this.coinName,
        data: this.chartData,
        },
      ],
      // in case of no data
      noData: {
        text: "Loading",
        align: 'center',
        verticalAlign: 'middle',
        style: {
          fontSize: '20px',
        }
      }
      
    }
  }

  ngOnInit(): void {
  }

  getData(coinId:String, fromDate:String, toDate: String) {
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

        // update the chart with the new data
        this.updateChart();
      },
      // error handling
      (error) => {
        this.chartData = [];
        this.updateChart();
        console.log(error);
      },
    );
  }

  updateChart() {
    this.chartOptions.series = [{
      data: this.chartData,
    }];
  }

}

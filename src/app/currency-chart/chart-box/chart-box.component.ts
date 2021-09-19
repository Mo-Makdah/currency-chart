// component imports
import { Component, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
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
import { Coin } from '../Interfaces/Coin';

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

  @Output() successEvent = new EventEmitter();
  @Output() errorEvent = new EventEmitter();

  // data variable
  chartData:ChartData[] = [];

  @Input() responseMessage:string = "";
  @Input() coinName:string = "";
  @Input() color:string = "#EF403C";
  

  constructor(private chartService: ChartService) {
    // chart options
    this.chartOptions = {
      // chart properties
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'OLHC Chart',
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

  // get data from the service and render the chart again
  getData(coinId:String, fromDate:String, toDate: String) {
    
    this.chartData = [];
    this.updateChart();
    this.chartService
    .getCoinData(coinId)
    .subscribe(
      (data: Coin) => {
        this.coinName = data.name;

        // get the data
        this.chartService
        .getDaysData(coinId, fromDate, toDate)
        .subscribe(
          (data:DayData[]) => {
            if(data.length == 0){
              // clear the chartData from previous data       
              this.chartData = [];
              this.responseMessage = "Invalid Date Parameters";
              this.errorEvent.emit();
            }
            else{
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

              this.color = "#00B746";
              this.responseMessage = this.coinName + " Chart Updated Successfully";
              this.successEvent.emit();
            }
            
        // update the chart with the new data
        this.updateChart();
      },
      // error handling
      (error) => {
        // server error
        this.color = "#EF403C";
        this.coinName = "";
        this.chartData = [];
        this.responseMessage = "Server Error! Try Again Later";
        this.errorEvent.emit();
        this.updateChart();
      },
    );

      },
      (error) => {
        // coin id error
        this.color = "#EF403C";
        this.coinName = "";
        this.chartData = [];
        this.responseMessage = "Incorrect Coin ID";
        this.errorEvent.emit();
        this.updateChart();

      },
    );

      
    ;
  }

  // update chart's data
  updateChart() {
    this.chartOptions.series = [{
      data: this.chartData,
    }];
  }

}

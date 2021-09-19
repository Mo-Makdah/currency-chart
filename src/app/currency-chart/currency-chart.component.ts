import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartBoxComponent } from './chart-box/chart-box.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.css'],
  
})

export class CurrencyChartComponent implements OnInit {

  // children components variables
  @ViewChild(SearchBoxComponent) searchBoxComponent: SearchBoxComponent | any;
  @ViewChild(ChartBoxComponent) chartBoxComponent: ChartBoxComponent | any;

  // search field variables
  coinId = "";
  fromDate = "";
  toDate = "";

  // constructor and onInit are not needed
  constructor() { }
  ngOnInit(): void { }

  // ngAfterViewInit runs after the ViewChild components have been loaded
  ngAfterViewInit(): void {

    // update the chart for the first time
    this.updateChart();
    
  }

  // will parse information from searchbox and and update the chart whenever the function is called
  updateChart(){
    this.coinId = this.searchBoxComponent.coinId;
    this.fromDate = this.searchBoxComponent.fromDate;
    this.toDate = this.searchBoxComponent.toDate;

    // call the chartbox getData function with the new data which will also render the updated chart
    this.chartBoxComponent.getData(this.coinId, this.fromDate, this.toDate);
  }

  updateSearchBox(){
    this.searchBoxComponent.color = this.chartBoxComponent.color;
    this.searchBoxComponent.coinName = this.chartBoxComponent.coinName;
    this.searchBoxComponent.responseMessage = this.chartBoxComponent.responseMessage;
  }

}

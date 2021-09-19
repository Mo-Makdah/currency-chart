import { HttpClient, HttpHandler } from '@angular/common/http';
import { viewClassName } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { empty } from 'rxjs';
import { ChartBoxComponent } from './chart-box/chart-box.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ChartService } from './services/chart.service';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.css'],
  
})
export class CurrencyChartComponent implements OnInit {


  searchCoinId: string = "";
  searchFromDate: string = "";
  searchToDate: string = "";
  
  @ViewChild(SearchBoxComponent) searchBoxComponent: SearchBoxComponent | any;
  @ViewChild(ChartBoxComponent) ChartBoxComponent: SearchBoxComponent | any;


  coinId = "";
  fromDate = "";
  toDate = "";

  constructor() { }
  
  ngAfterViewInit(): void {
    this.coinId = this.searchBoxComponent.coinId;
    this.fromDate = this.searchBoxComponent.fromDate;
    this.toDate = this.searchBoxComponent.toDate;
    this.updateChart();
    
  }

  

  ngOnInit(): void {
  }


  updateChart(){
    this.coinId = this.searchBoxComponent.coinId;
    this.fromDate = this.searchBoxComponent.fromDate;
    this.toDate = this.searchBoxComponent.toDate;
    console.log(" d " + this.fromDate);
    this.ChartBoxComponent.getData(this.coinId, this.fromDate, this.toDate);
  }

}

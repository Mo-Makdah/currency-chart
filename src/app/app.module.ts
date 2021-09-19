import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
import { SearchBoxComponent } from './currency-chart/search-box/search-box.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartBoxComponent } from './currency-chart/chart-box/chart-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyChartComponent,
    SearchBoxComponent,
    ChartBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

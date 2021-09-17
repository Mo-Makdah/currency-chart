import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
import { ChartComponent } from './currency-chart/chart/chart.component';
import { ControlBoxComponent } from './currency-chart/control-box/control-box.component';
import { SearchBoxComponent } from './currency-chart/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyChartComponent,
    ChartComponent,
    ControlBoxComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

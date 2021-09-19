# AngularCurrencyChart - Documentation
## By Mohammed Al Makdah

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## App Description
For the purpose of this project, I have created the web component `src/app/currency-chart` which can be added in any Angular web application. The component has 2 elements inside.

1) The `src/app/currency-chart/search-box` component which takes inputs necessary for fetching the data and displaying, these 3 input fields are `Coin Id`, `From Date`, `To Date`. This component also has a button to submit the data, as well as a response message section which displays the request's response whether a success or an error.
2) The `src/app/currency-chart/chart-box` component which takes the data from the search-box component input fields, and sends the input to the service which fetches the data from the API and displays the updated chart accordingly.

## App Demo
Temporary hosted on https://currency-chart-demo.netlify.app/

## ApexCharts
For drawing and plotting the OHLC chart, I used https://apexcharts.com/ open source charts modules.

## CoinPaprika API
For cyrptocurrency data, I used https://api.coinpaprika.com/ public API, and fetched and parsed the data to display in the candle sticks chart

## How To Use
You can use this component in any Angular web application, you just have to follow the following steps:
1) Place the `currency-chart` directory inside `src/app/` of your Angular project folder just like the above git file structure.
2) In `src/app/app.module.ts`, make sure to have all of these imports added
  `import { HttpClientModule } from '@angular/common/http'
  import { FormsModule } from '@angular/forms';
  import { CurrencyChartComponent } from './currency-chart/currency-chart.component';
  import { SearchBoxComponent } from './currency-chart/search-box/search-box.component';
  import { NgApexchartsModule } from 'ng-apexcharts';
  import { ChartBoxComponent } from './currency-chart/chart-box/chart-box.component';`
3) Also Inside `src/app/app.module.ts` inside `@ngModule` make sure to have the following declarations
  `declarations: [
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
  ],`
4) You can now use `<app-currency-chart></app-currency-chart>` inside your app and the chart-currency component will appear in your page



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

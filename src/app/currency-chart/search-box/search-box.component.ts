import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  
  // fields for the component
  coinId: String = "";
  fromDate?: Date;
  toDate?: Date;

  responseMessage: String = "This message will be dynamic";

  constructor() { }

  ngOnInit(): void {
    // get today's day and calculate the date before 30 days and fill the variables
    this.coinId = "btc-bitcoin";
    this.toDate = new Date();
    this.fromDate =  new Date(new Date().setDate(this.toDate.getDate()-30));
  }

}

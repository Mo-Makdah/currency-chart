import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  
  // fields for the component
  coinId: string = "";
  fromDate: string = "";
  toDate: string = "";

  // event emitter
  @Output() btnClick = new EventEmitter();

  responseMessage: String = "This message will be dynamic";

  constructor() { }

  ngOnInit(): void {
    // get today's day and calculate the date before 30 days and fill the variables
    this.coinId = "btc-bitcoin";
    var toDateObject = new Date();
    this.toDate = toDateObject.toISOString().split('T')[0];
    this.fromDate =  new Date(new Date().setDate(toDateObject.getDate()-30)).toISOString().split('T')[0];
    
    //this.btnClick.emit();
  }

  // emit an event when clicked
  onClick() {
    // get date 
    this.btnClick.emit();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  fromDate: String = "";
  toDate:String = "";
  constructor() { }

  ngOnInit(): void {
    var toDateObject = new Date()
    var fromDateObject = new Date(new Date().setDate(toDateObject.getDate()-30));

    this.fromDate = fromDateObject.toISOString().split("T")[0];
    this.toDate = toDateObject.toISOString().split("T")[0];

    
  }

}

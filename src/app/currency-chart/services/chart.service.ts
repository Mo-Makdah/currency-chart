import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DayData } from '../Interfaces/DayData';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  
  constructor(private http: HttpClient) { }

  getDaysData(coinId: String, fromDate: String, toDate: String): Observable<DayData[]> {
    const daysDataURL = 'https://api.coinpaprika.com/v1/coins/' + coinId +'/ohlcv/historical?start=' + fromDate + '&end=' + toDate;
    return this.http.get<DayData[]>(daysDataURL).pipe(catchError(this.handleError));
  }

  handleError(){
    return throwError("Error: Make sure you typed the correct coin ID, have working internet, or try again later");
  }
}

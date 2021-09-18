import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Day } from '../Interfaces/Day';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private coinId: string = '';
  private fromDate: string = '';
  private toDate: string = '';

  private coinsURL = 'https://api.coinpaprika.com/v1/coins';
  private coinURL = 'https://api.coinpaprika.com/v1/coins';
  private daysURL = 'https://api.coinpaprika.com/v1/coins/' + this.coinId +'/ohlcv/historical?start=' + this.fromDate + '&end=' + this.toDate;
  
  constructor(private http: HttpClient) { }

  getCoins(): Observable<any> {
      return this.http.get<any>("https://api.coinpaprika.com/v1/coins/btcd-bitcoin/ohlcv/historical?start=2018-02-15&end=2018-03-15").pipe(catchError(this.handleError));
  }

  handleError(error:HttpErrorResponse){
    return throwError("Server error, make sure you have typed the correct coin ID");
  }
}

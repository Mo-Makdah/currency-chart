import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Day } from '../Interfaces/Day';

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

  getCoins(): Observable<Day[]> {
      return this.http.get<Day[]>(this.coinURL);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  coinName: string = "";
  responseMessage: string = "";
  constructor() { }

  updateSearchBox(coinName: string, responseMessage:string){
    
  }
}

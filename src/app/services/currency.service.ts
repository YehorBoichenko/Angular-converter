import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private API: string = 'https://openexchangerates.org/api/latest.json?app_id=03a9d739376a43e491807006c090fa77';

  constructor(private http: HttpClient) {
    this.getCurrency();
  }

  getCurrency(): Observable<any> {
    return this.http.get(this.API);
  }
}

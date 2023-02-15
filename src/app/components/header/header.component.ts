import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'header-converter',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date: string = new Date().toString();
  USD: number = 0;
  EUR: number = 0;
  UAH: number = 1;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrency()
  }

  getCurrency(): void {
    this.currencyService.getCurrency().subscribe(data => {
      this.USD = data.rates['USD'] * data.rates['UAH']
      this.EUR = data.rates['EUR'] * data.rates['UAH']
    })
  }
}

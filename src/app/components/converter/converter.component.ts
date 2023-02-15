import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent implements OnInit {
  rates: any = {};

  to: any = {
    value: null,
    rate: null
  }

  from: any = {
    value: null,
    rate: null
  }

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.getCurrency()
  }

  getCurrency(): void {
    this.currencyService.getCurrency().subscribe(data => this.rates = data.rates)
  }

  toCurrencies(): void {
    this.from.value = ((this.to.value * this.from.rate) / this.to.rate).toFixed(2)
  }

  fromCurrencies(): void {
    this.to.value = ((this.from.value * this.to.rate) / this.from.rate).toFixed(2)
  }
}

import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-last-few-transactions',
    templateUrl: './last-few-transactions.component.html',
    styleUrls: ['./last-few-transactions.component.scss'],
    imports: [NgClass]
})
export class LastFewTransactionsComponent implements OnInit {

  transactions = [
    {
      id: 1,
      title: "Ryzen 5 Processor",
      price: "$299",
      shop: "Tech Pro",
      location: "Soft",
      status: "pending",
      // imgSrc: ""
    },
    {
      id: 2,
      title: "Intel",
      price: "$7.89",
      shop: "Shap",
      location: "Oracle",
      status: "shipped",
      // imgSrc: ""
    },
    {
      id: 3,
      title: "VDV",
      price: "$69",
      shop: "Drivers",
      location: "Pluggins",
      status: "confirmed",
      // imgSrc: ""
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

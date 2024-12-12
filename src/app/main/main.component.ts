import { Component, OnInit } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { SalesByMonthComponent } from '../sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from '../sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from '../last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from '../top-three-products/top-three-products.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    imports: [TopWidgetsComponent, SalesByMonthComponent, SalesByCategoryComponent, LastFewTransactionsComponent, TopThreeProductsComponent]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

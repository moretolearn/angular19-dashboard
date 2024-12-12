import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
    selector: 'app-top-three-products',
    templateUrl: './top-three-products.component.html',
    styleUrls: ['./top-three-products.component.scss'],
    imports: [ChartModule]
})
export class TopThreeProductsComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Dell 5559',
        'HP 99079',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'Lenova Thinkpad E15',
          y: 395,
          color: '#044342',
        },
        {
          name: 'Dell 5559',
          y: 385,
          color: '#7e0505',
        },
        {
          name: 'HP 99079',
          y: 275,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  ventas:string= 'sin-titulo'
  
  public label1:string[]=[ 'Refresco', 'Panqueque', 'Gaseosas' ];
  public data1: ChartData<'doughnut'> = {
    labels: this.label1,
    datasets: [
      { data: [ 100, 150, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };

}

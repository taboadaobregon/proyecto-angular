import { Component, Input,SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() titulo:string = 'sin-titulo';

  @Input('labels') labels: string[] = [ 'label1', 'label2', 'label3' ];
  @Input('data') data:any  = {
    labels: this.labels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor:['#6857E6','#009FEE','#FFB414']
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

 
}

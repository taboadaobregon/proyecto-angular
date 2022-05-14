import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  progreso1:number = 15;
  progreso2:number = 45;

  getPorcentaje1(){
    return  `${this.progreso1}%`; 
  }

  getPorcentaje2(){
    return  `${this.progreso2}%`; 
  }

  

}


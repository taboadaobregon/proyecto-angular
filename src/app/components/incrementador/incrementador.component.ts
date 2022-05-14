import { Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit {

  ngOnInit(){
    this.button = `btn ${this.button}` 
  }
    /* @Input('valor') progreso:number = 40; */
    @Input('valor') progreso:number = 40; 
    @Input() button:string = 'btn-primary';
    @Output() valorSalida : EventEmitter<number> = new EventEmitter();
 
   
      

  getPorcentaje(){
    return  `${this.progreso}%`;
  }

  cambiarValor(valor:number){
    
    if(this.progreso >=100 && valor >= 0){
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }

    if(this.progreso <=0 && valor < 0){
       this.valorSalida.emit(0);
       this.progreso = 0;
       return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onchange(nuevoValor:number){

    //aca calficamos que no sea mayor a 100 ni menor a 0
    
    if(nuevoValor >= 100){
      this.progreso = 100;
    }else if(nuevoValor <= 0)
    {
      this.progreso = 0
    }else{
       this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);

  }


}

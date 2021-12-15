import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
// le colocamos un output porque le estamos pasando el evento
//y el parametro@ autoput evitimos eventos y a traves de eso pasamos parametros desde componente hijo al padre,[(ngModel)]="termino" en el html

@Output() onEnter:EventEmitter<string> = new EventEmitter()

  termino:string='';

buscar(){
  this.onEnter.emit(this.termino)
}

  constructor() { }

  ngOnInit(): void {
    this.onEnter.emit(this.termino);
  }

}

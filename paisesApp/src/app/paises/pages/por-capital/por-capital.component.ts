import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino!:string
  error:boolean = false;
  paises: Countries[]=[]
// llamamos al servicio por el constructor
  constructor(private paisservice: PaisService) { }

buscar(termino: string){

this.termino= termino;

  this.error = false;
  console.log(this.termino);
  this.paisservice.buscarCapital(this.termino)
  .subscribe((resp) =>{
    console.log(resp);
    this.paises = (resp)


  },(err)=>{
    this.error = true;
  });
}

}

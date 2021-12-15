import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {


  termino!:string
  error:boolean = false;
  paises: Countries[]=[]
// llamamos al servicio por el constructor
  constructor(private paisservice: PaisService) { }

buscar(){
  this.error = false;
  console.log(this.termino);
  this.paisservice.buscarPais(this.termino)
  .subscribe((resp) =>{
    console.log(resp);
    this.paises = (resp)


  },(err)=>{
    this.error = true;
  });
}

  ngOnInit(): void {
  }

}

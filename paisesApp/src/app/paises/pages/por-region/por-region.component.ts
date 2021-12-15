import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {


  termino!:string
  error:boolean = false;
  paises: Countries[]=[]
// llamamos al servicio por el constructor
  constructor(private paisservice: PaisService) { }

buscar(termino: string){

this.termino= termino;

  this.error = false;
  console.log(this.termino);
  this.paisservice.buscarRegion(this.termino)
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

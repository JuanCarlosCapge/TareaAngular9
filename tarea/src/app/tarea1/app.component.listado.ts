import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea1',
  templateUrl: './app.component.listado.html',
  styleUrls: ['../app.component.css']
})

export class Tarea1Component {
  title = 'tarea';


  meses:string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto"
  ,"Septiembre","octubre","Novimbre","Diciembre"]
  MesBorrado:string |undefined = "";


  borrarNombre(){
   this.MesBorrado = this.meses.pop();

  }

}

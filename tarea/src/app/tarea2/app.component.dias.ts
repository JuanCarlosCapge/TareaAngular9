import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea2',
  templateUrl: './app.component.dias.html',
  styleUrls: ['../app.component.css']
})

export class Tarea2Component {
  title = 'Dias';

  dias:string[] = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sababdo","Domingo"]
  DiaBorrado:string |undefined = "";


  borrarNombre(){
   this.DiaBorrado = this.dias.pop();


  }

}

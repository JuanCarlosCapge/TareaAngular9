import { Component } from '@angular/core';
import { DiasService } from '../service/dias.service';

@Component({
  selector: 'app-tarea2',
  templateUrl: './app.component.dias.html',
  styleUrls: ['../app.component.css']
})

export class Tarea2Component {
  title = 'Dias';
constructor (private diasService:DiasService){

}

get dias(): string[] {
  return this.diasService.dias;
}


  borrarNombre(){
   this.diasService.borrarNombre();
  }

}

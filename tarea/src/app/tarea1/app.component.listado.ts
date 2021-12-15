import { Component } from '@angular/core';
import { MesesService } from '../service/meses.service';

@Component({
  selector: 'app-tarea1',
  templateUrl: './app.component.listado.html',
  styleUrls: ['../app.component.css']
})

export class Tarea1Component {
  title = 'tarea';
constructor(private mesesService:MesesService){}

get meses(): string[]{
  return this.mesesService.meses;
}

//meses: string[]= this.mesesService.meses;
  borrarNombre(): void{
    this.mesesService.borrarNombre()
}

}

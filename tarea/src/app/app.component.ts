import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea';


  meses:string[] = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto"
  ,"Septiembre","octubre","Novimbre","Diciembre"]
  MesBorrado:string |undefined = "";


  borrarNombre(){
   this.MesBorrado = this.meses.pop();

  }

}

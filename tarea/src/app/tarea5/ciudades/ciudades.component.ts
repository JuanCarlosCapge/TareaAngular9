import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {

  ciudades:string[] = [];
  ciudadBorrada: any = "";
  ciudadesBorradas:string[] = [];

  mostrarCiudades() {
   this.ciudades = ["Madrid", "Ciudad Real", "Cantabria", "Asturias", "San Sebastián", "Toledo"];
  }

  borrarCiudades() {
    this.ciudadBorrada = this.ciudades.pop();
    this.ciudadesBorradas.push(this.ciudadBorrada);
  }

}

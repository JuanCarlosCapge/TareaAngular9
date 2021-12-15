import { Injectable } from "@angular/core";

@Injectable()

export class DiasService {

  private _dias: string[] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sababdo", "Domingo"];


  public get dias(): string[] {
    return this._dias;
  }

  borrarNombre(){
    this.dias.pop();
  }

}

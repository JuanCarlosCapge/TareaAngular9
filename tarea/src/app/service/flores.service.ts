import { Injectable } from "@angular/core";

@Injectable()

export class FloresService{

  private _flores: string[] = ["Rosa", "Margarita", "Petunia", "Cardo", "Azafran", "Mentolada"];


  public get flores(): string[] {
    return this._flores;
  }

  borrarNombre(){
    this._flores= [];
   }
}

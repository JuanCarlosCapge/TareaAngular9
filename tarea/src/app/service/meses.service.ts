import { Injectable } from "@angular/core";

@Injectable()

export class MesesService{

  private _meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "octubre", "Novimbre", "Diciembre"];

    public get meses(): string[] {
     return this._meses;
  }

  borrarNombre(): void{
    this.meses.pop()

}


}

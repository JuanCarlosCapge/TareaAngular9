import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent  {

  title = 'tarea';


  comidas:string[] = ["Migas","Codido","Lentejas","Judias","Gachas","Bocata jamon","queso Aceite","pure patata"]



  borrarComida(){
    this.comidas = []

  }


}

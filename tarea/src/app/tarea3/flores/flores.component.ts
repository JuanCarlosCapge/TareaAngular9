import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent  {

  title = 'tarea';


  flores:string[] = ["Rosa","Margarita","Petunia","Cardo","Azafran","Mentolada"]



  borrarNombre(){
    this.flores = []

  }


}

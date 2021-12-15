import { Component, OnInit } from '@angular/core';
import { FloresService } from 'src/app/service/flores.service';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent  {

  title = 'tarea';
  constructor (private floresService:FloresService){
  }

  flores: string[] = this.floresService.flores;

  borrarNombre(){
  this.floresService.borrarNombre();
  this.flores = this.floresService.flores;
  }


}

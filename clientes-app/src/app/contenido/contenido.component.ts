import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  contenido:Cliente[]=[

  {id:1,nombre:"Carlos",apellido:"Pedraza",email: "cap@EmailValidator.com",createAt:"2001-04-09"},
  {id:2,nombre:"Chufi",apellido:"Pedraza",email: "cp@EmailValidator.com",createAt:"2020-07-07"},
  {id:3,nombre:"Alvaro",apellido:"Eeeel",email: "ae@EmailValidator.com",createAt:"2011-06-22"},
  {id:4,nombre:"Alex",apellido:"Zamora",email: "az@EmailValidator.com",createAt:"2031-04-21"},
  {id:5,nombre:"Fernando",apellido:"Alonso",email: "fa@EmailValidator.com",createAt:"2008-03-28"},
  {id:6,nombre:"Javi",apellido:"Angulo",email: "ja@EmailValidator.com",createAt:"2007-02-24"},
  {id:7,nombre:"Alberto",apellido:"Marquez",email: "am@EmailValidator.com",createAt:"2006-02-24"},
  {id:8,nombre:"Mario",apellido:"hernan",email: "ja@EmailValidator.com",createAt:"2003-05-23"},
  {id:9,nombre:"Aitor",apellido:"Muñoz",email: "am@EmailValidator.com",createAt:"2009-06-22"},

];

  constructor() { }

  ngOnInit(): void {
  }

}

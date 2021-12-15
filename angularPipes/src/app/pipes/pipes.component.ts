import { Component } from "@angular/core";

@Component({

  selector:' app-pipes',
  templateUrl: './pipes.component.html',
  styles: [

  ]
})

export class PipesComponent{

  name: string = 'angular';

  name2: string ='TYPESCRYPT';

  //sintaxis{{Valorpi | number:N1.N2-N3}}
  // N1 = 1 cantidas de numeros enteros
  //N2 = 0 cantidad mínima de números decimales
  //N3 = 3 cantidad máxima de números decimales

  valorpi:number =3.141592;


  //sintaxis {{ nyNum | porcent: '(string con 3 valores numericos)}}
  //N1.N2-N3'}}

  nyNum = 0.354242424;

  salary = 2400.23;


  personaje={
    name: 'Goku',
    alias: 'kakaroto',
    song: 'yyyiieeeepaaaa',
    skills: ['poder sahian ', ' amor amigos'],
    youtubeCanal: 'goku.es',
    addres:{
      street:'Planeta vegeta',
      number:'3',
      ciudad:'Tierra'

    },
  }

  promiseValue = new Promise((resolve, reject)=>{
  setTimeout(() =>{
    resolve('Esto Funciona');

  },3000);
});

myDate = new Date();

}



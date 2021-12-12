import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1: number;
  num2: number;
  numbers = [];
  result: number;

  constructor(private calculadora: CalculadoraService) { }

  ngOnInit() { }

  addNumber(num: any, id: number) {
    this.numbers[id] = num;
  }

  getResultado(numeros: number) {
    console.log(numeros);
    this.result = numeros;
  }
  public borrar() {
    this.result = 0; this.numbers = [];
    this.num1 = 0; this.num2 = 0;
  }

}

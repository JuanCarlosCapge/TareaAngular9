import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcularComponent } from './calculadora/calcular/calcular.component';
import { MostrarResultadoComponent } from './calculadora/mostrar-resultado/mostrar-resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularComponent,
    MostrarResultadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiasService } from './service/dias.service';
import { FloresService } from './service/flores.service';
import { MesesService } from './service/meses.service';
import { Tarea1Component } from './tarea1/app.component.listado';
import { Tarea2Component } from './tarea2/app.component.dias';
import { FloresComponent } from './tarea3/flores/flores.component';
import { ComidasComponent } from './tarea4/comidas/comidas.component';
import { CiudadesComponent } from './tarea5/ciudades/ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    Tarea1Component,
    Tarea2Component,
    FloresComponent,
    ComidasComponent,
    CiudadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MesesService,DiasService,FloresService,CiudadesComponent,ComidasComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

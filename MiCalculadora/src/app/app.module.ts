import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './modules/angular-material/components/input/input.component';
import { BtnComponent } from './modules/angular-material/components/btn/btn.component';
	

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

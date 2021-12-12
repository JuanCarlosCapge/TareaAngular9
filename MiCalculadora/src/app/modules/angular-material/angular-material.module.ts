import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { BtnComponent } from './components/btn/btn.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputComponent,
    BtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BtnComponent,
    InputComponent
  ]
})
export class AngularMaterialModule { }

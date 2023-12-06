import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-actividad',
  templateUrl: './create-actividad.component.html',
  styleUrls: ['./create-actividad.component.css']
})
export class CreateActividadComponent {

  paso1: boolean = true;
  paso2: boolean = false;
  paso3: boolean = false;

  onSubmit(etiquetaForm: NgForm){}



  //------------------------------------------------ pasos completados

  paso1Completo(){
    this.paso1 = false;
    this.paso2 = true;
    this.paso3 = false;
  }
}

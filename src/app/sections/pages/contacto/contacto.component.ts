import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacto } from 'src/app/entities/Contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  contacto: Contacto = new Contacto();

  enviarCorreo(correoForm: NgForm) {
    console.log(correoForm.value);
  }
}

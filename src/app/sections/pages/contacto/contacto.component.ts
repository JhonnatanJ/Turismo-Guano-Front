import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Contacto } from 'src/app/entities/Contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  contacto: Contacto = new Contacto();

  enviarCorreo(e: Event) {
    emailjs
      .sendForm(
        'service_noik4qn',
        'template_eryisjm',
        e.target as HTMLFormElement,
        'woW_vHGCSdnF-Zv4G'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert('Mensaje Enviado con Éxito!');
          console.log(result.text);
        },
        (error) => {
          alert('ERROR: El Mensaje no se pudo enviar');
          console.log(error.text);
        }
      );
  }
}

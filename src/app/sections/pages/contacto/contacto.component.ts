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
    alert('ESPERE UN MOMENTO...\n (Presione Aceptar)');
    emailjs
      .sendForm(
        'service_noik4qn',
        'template_eryisjm',
        e.target as HTMLFormElement,
        'woW_vHGCSdnF-Zv4G'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert('MENSAJE ENVIADO CON ÉXITO!\n (Presione Aceptar)');
          console.log(result.text);
        },
        (error) => {
          alert('ERROR: EL MENSAJE NO SE PUDO ENVIAR\n (Presione Aceptar)');
          console.log(error.text);
        }
      );
  }
}

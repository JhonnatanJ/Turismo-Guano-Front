import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from 'src/app/entities/Usuario';
import { UpdateUsuarioDto } from 'src/app/entities/dto/usuario/update-usuario.dto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  constructor(private usuarioService: UsuarioService) {}

  email: string = '';
  newPassword: string = '';
  usuario: Usuario = new Usuario();

  async enviarCorreo(passwordForm: NgForm) {
    let auxEmailPassword = passwordForm.value.emailPassword;

    alert('ESPERE UN MOMENTO...\n (Presione Aceptar)');

    await this.buscarUsuario();
    this.modificarContraseña();

    const template_params: Record<string, unknown> = {
      emailRecuperar: auxEmailPassword,
      password: this.usuario.contrasenia_usuario,
    };

    emailjs
      .send(
        'service_r1021pj',
        'template_n1nis3m',
        template_params,
        'woW_vHGCSdnF-Zv4G'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert(
            'MENSAJE ENVIADO CON ÉXITO!\n\nREVISE SU CORREO ELECTRÓNICO.\n(Presione Aceptar)'
          );
          console.log(result.text);
        },
        (error) => {
          alert('ERROR: EL MENSAJE NO SE PUDO ENVIAR \n (Presione Aceptar)');
          console.log(error.text);
        }
      );
  }

  buscarUsuario() {
    return new Promise<void>((resolve, reject) => {
      this.usuarioService.getUsuarioByEmail(this.email).subscribe(
        (usuario) => {
          this.usuario = usuario;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }

  async modificarContraseña() {
    try {
      let auxPassword =
        this.usuario.nombres_usuario + this.usuario.apellidos_usuario;

      this.newPassword = auxPassword.replace('/ /g', '');

      this.usuario.contrasenia_usuario = auxPassword;
      const newUsuario: UpdateUsuarioDto = {
        newApellidos: this.usuario.apellidos_usuario,
        newNombres: this.usuario.nombres_usuario,
        newContrasenia: this.newPassword,
        newEmail: this.usuario.email_usuario,
      };
      await this.updateUsuario(newUsuario);
    } catch (error) {
      console.log(error);
    }
  }

  updateUsuario(usuario: UpdateUsuarioDto) {
    return new Promise<void>((resolve, reject) => {
      this.usuarioService
        .updateUsuario(usuario, this.usuario.id_usuario)
        .subscribe(
          (usuario) => {
            this.usuario = usuario;
            resolve();
          },
          (err) => {
            console.log(err);
            reject();
          }
        );
    });
  }
}

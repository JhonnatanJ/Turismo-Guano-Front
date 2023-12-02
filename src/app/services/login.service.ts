import { Injectable } from '@angular/core';
import { Login } from '../entities/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  LOGGED: boolean = false;
  usuario: Login = { email: 'jhonnatan@gmail.com', contrasenia: '1234' };
  constructor() {}

  autenticar(credenciales: Login) {
    //TODO: Conectar con backend para verificar credenciales
    if (
      credenciales.email === this.usuario.email &&
      credenciales.contrasenia === this.usuario.contrasenia
    ) {
      this.logStatus(true);
      return true;
    } else {
      return false;
    }
  }

  logStatus(status: boolean) {
    this.LOGGED = status;
  }
}

import { Injectable } from '@angular/core';
import { Login } from '../entities/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  autenticar(credenciales: Login){
    //TODO: Conectar con backend para verificar credenciales
    const usuario = {email : '', contrasenia: ''}

    return (credenciales === usuario) ? true : false;
  }
}

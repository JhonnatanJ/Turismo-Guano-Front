import { Injectable } from '@angular/core';
import { Login } from '../entities/dto/login.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/paged-producto.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:4000';


  autenticar(credenciales: Login): Observable<Usuario> {
    const url = `${this.host}/login`;
    return this.http.post<Usuario>(url, credenciales);
  }

  cerrarSesion(status: boolean) {
    sessionStorage.setItem('logged', JSON.stringify(status));
    sessionStorage.setItem('usuario', JSON.stringify([]));
  }

  guardarDatos(logged: boolean, usuario: Usuario) {
    try {
      sessionStorage.setItem('logged', JSON.stringify(logged));
      sessionStorage.setItem('usuario', JSON.stringify(usuario));
    } catch (error) {
      console.log(error);
    }
  }
}

import { Injectable } from '@angular/core';
import { Login } from '../entities/login.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/paged-producto.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  LOGGED: boolean = false;
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:4000';

  autenticar(credenciales: Login): Observable<Usuario> {
    const url = `${this.host}/login`;
    return this.http.post<Usuario>(url, credenciales);
  }

  logStatus(status: boolean) {
    this.LOGGED = status;
  }
}

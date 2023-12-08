import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedUsuario } from '../entities/paged-usuario.interface';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private host = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getUsuarios(pagina: number): Observable<PagedUsuario> {
    const url = `${this.host}/usuarios/only/${pagina}`;
    return this.http.get<PagedUsuario>(url);
  }

  deleteUsuario(idUsuario: number): Observable<HttpStatusCode> {
    const url = `${this.host}/usuario/${idUsuario}`;
    return this.http.delete<HttpStatusCode>(url);
  }
}

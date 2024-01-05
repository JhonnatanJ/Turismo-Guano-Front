import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedUsuario } from '../entities/paged-usuario.interface';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/Usuario';
import { CreateUsuarioDto } from '../entities/dto/usuario/create-usuario.dto';
import { UpdateUsuarioDto } from '../entities/dto/usuario/update-usuario.dto';

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

  getUsuarioById(idUsuario: number): Observable<Usuario> {
    const url = `${this.host}/usuario/${idUsuario}`;
    return this.http.get<Usuario>(url);
  }

  getUsuarioByEmail(emailUsuario: string): Observable<Usuario> {
    const url = `${this.host}/usuario/email/${emailUsuario}`;
    return this.http.get<Usuario>(url);
  }

  createUsuario(usuario: CreateUsuarioDto): Observable<Usuario> {
    const url = `${this.host}/usuario`;
    return this.http.post<Usuario>(url, usuario);
  }

  updateUsuario(usuario: UpdateUsuarioDto, idUsuario: number): Observable<Usuario> {
    const url = `${this.host}/usuario/${idUsuario}`;
    return this.http.put<Usuario>(url, usuario);
  }

  deleteUsuario(idUsuario: number): Observable<HttpStatusCode> {
    const url = `${this.host}/usuario/${idUsuario}`;
    return this.http.delete<HttpStatusCode>(url);
  }
}

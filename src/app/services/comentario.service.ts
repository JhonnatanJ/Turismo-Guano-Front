import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateComentarioDto } from '../entities/dto/turismo/create-comentario.dto';
import { Comentario } from '../entities/paged-actividad.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:4000';

  createComentario(createComentario: CreateComentarioDto, idActividad: number): Observable<Comentario> {
    const url = `${this.host}/comentario/${idActividad}`;
    return this.http.post<Comentario>(url, createComentario);
  }
}

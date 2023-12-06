import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etiqueta } from '../entities/paged-actividad.interface';
import { CreateEtiquetaDto } from '../entities/dto/turismo/create-etiqueta.dto';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {

  constructor(private http: HttpClient) { }

  private host = 'http://localhost:4000';

  getEtiquetaPorNombre(nombre: string): Observable<Etiqueta> {
    const url = `${this.host}/etiqueta/nombre/${nombre}`;
    return this.http.get<Etiqueta>(url);
  }

  createEtiqueta(etiqueta: CreateEtiquetaDto): Observable<Etiqueta>{
    const url = `${this.host}/etiqueta/`;
    return this.http.post<Etiqueta>(url,etiqueta);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etiqueta } from '../entities/paged-actividad.interface';
import { CreateEtiquetaDto } from '../entities/dto/turismo/create-etiqueta.dto';
import { UpdateEtiquetaDto } from '../entities/dto/turismo/update-etiqueta.dto';

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

  updateEtiqueta(etiqueta: UpdateEtiquetaDto, idEtiqueta: number): Observable<Etiqueta>{
    const url = `${this.host}/etiqueta/${idEtiqueta}`;
    return this.http.put<Etiqueta>(url,etiqueta);
  }
}

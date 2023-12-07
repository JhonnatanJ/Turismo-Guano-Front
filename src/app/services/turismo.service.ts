import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedActividades } from '../entities/paged-actividad.interface';
import { CreateActividadDto } from '../entities/dto/turismo/create-actividad.dto';
import { Actividad } from '../entities/Actividad';
import { UpdateActividadDto } from '../entities/dto/turismo/update-actividad.dto';

@Injectable({
  providedIn: 'root',
})
export class TurismoService {
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:4000';

  getAllActividades(pagina: number): Observable<PagedActividades> {
    const url = `${this.host}/puntos/${pagina}`;
    return this.http.get<PagedActividades>(url);
  }

  getActividadById(idActividad: number): Observable<Actividad>{
    const url = `${this.host}/punto/${idActividad}`;
    return this.http.get<Actividad>(url);
  }

  createActividad(actividad: CreateActividadDto):Observable<Actividad>{
    const url = `${this.host}/punto`;
    return this.http.post<Actividad>(url,actividad);
  }

  updateActividad(actividad: UpdateActividadDto, idActividad: number): Observable<Actividad>{
    const url = `${this.host}/punto/${idActividad}`;
    return this.http.put<Actividad>(url,actividad);
  }

  deleteActividad(idActividad: number): Observable<HttpStatusCode>{
    const url = `${this.host}/punto/${idActividad}`;
    return this.http.delete<HttpStatusCode>(url);
  }
}

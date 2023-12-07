import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actividad, PagedActividades } from '../entities/paged-actividad.interface';
import { Observable } from 'rxjs';
import { CreateActividadDto } from '../entities/dto/turismo/create-actividad.dto';

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

  createActividad(actividad: CreateActividadDto):Observable<Actividad>{
    const url = `${this.host}/punto`;
    return this.http.post<Actividad>(url,actividad);
  }
}

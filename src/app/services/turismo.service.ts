import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedActividades } from '../entities/paged-actividad.interface';
import { Observable } from 'rxjs';

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
}

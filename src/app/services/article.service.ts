import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../entities/articulo.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private host = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  buscarArticulos(): Observable<Articulo[]> {
    const url = `${this.host}/articulos`;
    return this.http.get<Articulo[]>(url);
  }

  buscarArticulosPorId(id: number): Observable<Articulo> {
    const url = `${this.host}/articulo/${id}`;
    return this.http.get<Articulo>(url);
  }
}

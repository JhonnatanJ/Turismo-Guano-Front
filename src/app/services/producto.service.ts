import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedProductos } from '../entities/paged-producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  private host = 'http://localhost:4000';

  getAllProductos(pagina: number): Observable<PagedProductos> {
    const url = `${this.host}/productos/${pagina}`;
    return this.http.get<PagedProductos>(url);
  }
}

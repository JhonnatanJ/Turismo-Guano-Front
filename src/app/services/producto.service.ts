import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagen, PagedProductos, Producto } from '../entities/paged-producto.interface';
import { Observable } from 'rxjs';
import { CreateProductoDto } from '../entities/dto/productos/create-producto.dto';

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

  createProducto(producto: CreateProductoDto): Observable<Producto>{
    const url = `${this.host}/producto`;
    return this.http.post<Producto>(url, producto);
  }

  createImagen(imagen:File, idProducto: number): Observable<Imagen>{
    const dataForm = new FormData();
    dataForm.append('imagen',imagen);
    const url = `${this.host}/producto/imagen/${idProducto}`;
    return this.http.post<any>(url,dataForm);
  }
}

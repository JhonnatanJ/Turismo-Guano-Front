import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Imagen,
  PagedProductos,
  Producto,
} from '../entities/paged-producto.interface';
import { CreateProductoDto } from '../entities/dto/productos/create-producto.dto';
import { UpdateProductoDto } from '../entities/dto/productos/update-producto.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  private host = 'http://localhost:4000';

  getAllProductos(pagina: number): Observable<PagedProductos> {
    const url = `${this.host}/productos/${pagina}`;
    return this.http.get<PagedProductos>(url);
  }

  getProductoById(idProducto: number): Observable<Producto> {
    const url = `${this.host}/producto/${idProducto}`;
    return this.http.get<Producto>(url);
  }

  createProducto(producto: CreateProductoDto): Observable<Producto> {
    const url = `${this.host}/producto`;
    return this.http.post<Producto>(url, producto);
  }

  updateProducto(
    producto: UpdateProductoDto,
    idProducto: number
  ): Observable<Producto> {
    const url = `${this.host}/producto/${idProducto}`;
    return this.http.put<Producto>(url, producto);
  }

  createImagen(imagen: File, idProducto: number): Observable<Imagen> {
    const dataForm = new FormData();
    dataForm.append('imagen', imagen);
    const url = `${this.host}/producto/imagen/${idProducto}`;
    return this.http.post<any>(url, dataForm);
  }

  updateImagen(imagen: File, idImagen: number, idProducto: number) {
    const dataForm = new FormData();
    dataForm.append('imagen', imagen);
    const url = `${this.host}/producto/imagen/${idProducto}/${idImagen}`;
    return this.http.put<any>(url, dataForm);
  }
}

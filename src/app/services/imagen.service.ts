import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen } from '../entities/Imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private host = 'http://localhost:4000';

  constructor(private http: HttpClient) { }


  createImagenProducto(imagen: File, idProducto: number): Observable<Imagen> {
    const dataForm = new FormData();
    dataForm.append('imagen', imagen);
    const url = `${this.host}/producto/imagen/${idProducto}`;
    return this.http.post<any>(url, dataForm);
  }

  createImagenTurismo(imagen:File, idActividad: number): Observable<Imagen>{
    const dataForm = new FormData();
    dataForm.append('imagen',imagen);
    const url = `${this.host}/punto/imagen/${idActividad}`;
    return this.http.post<any>(url,dataForm);

  }

  updateImagenProducto(imagen: File, idImagen: number, idProducto: number): Observable<Imagen>{
    const dataForm = new FormData();
    dataForm.append('imagen', imagen);
    const url = `${this.host}/producto/imagen/${idProducto}/${idImagen}`;
    return this.http.put<any>(url, dataForm);
  }

  updateImagenActividad(imagen: File, idImagen: number, idActividad: number): Observable<Imagen>{
    const dataForm = new FormData();
    dataForm.append('imagen', imagen);
    const url = `${this.host}/punto/imagen/${idActividad}/${idImagen}`;
    return this.http.put<any>(url, dataForm);
  }

  deleteImagen(idImagen: number): Observable<HttpStatusCode>{
    const url = `${this.host}/imagen/${idImagen}`;
    return this.http.delete<HttpStatusCode>(url);
  }
}

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ProductoService } from 'src/app/services/producto.service';

import { CreateProductoDto } from 'src/app/entities/dto/productos/create-producto.dto';
import { Producto } from '../../../entities/paged-producto.interface';
import { Etiqueta } from '../../../entities/paged-actividad.interface';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit{
  etiquetas = ['Leche', 'Yogurt', 'Queso'];
  etiqueta!: string;
  producto!: Producto;

  paso1: boolean = true;
  paso2: boolean = false;

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paso1 = true;
    this.paso2 = false;
  }

  // ** ------------------------------------------------------------------- PASO 1

  onSubmit(infoForm: NgForm) {
    try {
      const auxProducto: CreateProductoDto = {
        nombres: infoForm.value.nombre,
        etiqueta: infoForm.value.etiqueta,
        precio: infoForm.value.precio,
        descripcion: infoForm.value.descripcion,
        likes: 1,
        id_usuario: JSON.parse(sessionStorage.getItem('usuario')!).id_usuario,
      };
      this.createProducto(auxProducto);
    } catch (error) {
      console.log(error);
    }
  }

  createProducto(producto: CreateProductoDto) {
    this.productoService.createProducto(producto).subscribe(
      (producto) => {
        this.producto = producto;
        this.paso1Completo();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //-------------------------------------------- pasos completados

  paso1Completo() {
    this.paso1 = false;
    this.paso2 = true;
  }

  // * ------------------------------------------------------------------ PASO 2

  imagen!: File;
  imagenMin!: File;

  onSubmit2() {
    this.productoService
      .createImagen(this.imagen, this.producto.id_producto)
      .subscribe(
        (imagen) => {
          this.paso2Completo();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onFileChange(event: Event) {
    this.imagen = (<HTMLInputElement>event.target).files![0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  reset(imageForm: NgForm) {
    this.imagen != null;
    this.imagenMin != null;
    imageForm.reset();
  }
  //-------------------------------------------- pasos completados

  paso2Completo() {
    this.paso2 = false;
    this.router.navigate(['admin/list-producto']);
  }
}

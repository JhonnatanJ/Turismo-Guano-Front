import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Producto } from '../../../entities/Producto';

import { ProductoService } from 'src/app/services/producto.service';
import { UpdateProductoDto } from 'src/app/entities/dto/productos/update-producto.dto';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css'],
})
export class VerProductoComponent implements OnInit {
  idProducto!: number;

  producto: Producto = new Producto();
  productos: Producto[] = [];

  constructor(
    private router: Router,
    private _router: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.idProducto = parseInt(this._router.snapshot.paramMap.get('id')!);
    if (this.idProducto) {
      this.getProductoById(this.idProducto);
    }
  }

  getProductoById(idProducto: number) {
    this.productoService.getProductoById(idProducto).subscribe(
      (producto) => {
        this.producto = producto;

      },
      (err) => console.log(err)
    );
  }

  agregarLike() {
    const auxProducto: UpdateProductoDto = {
      newNombre: this.producto.nombres_producto,
      newEtiqueta: this.producto.etiqueta_producto,
      newDescripcion: this.producto.descripcion_producto,
      newLikes: this.producto.likes_producto + 1,
      newPrecio: this.producto.precio_producto,
      id_usuario: this.producto.id_usuario,
    };
    this.productoService.updateProducto(auxProducto, this.idProducto).subscribe(
      (producto) => {
        this.producto.likes_producto += 1;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

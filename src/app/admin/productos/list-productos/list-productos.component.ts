import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Producto } from 'src/app/entities/paged-producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css'],
})
export class ListProductosComponent implements OnInit {
  countEntities: number = 0;
  next: boolean = false;
  pagina: number = 1;

  productos!: Producto[];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    try {
      this.getProductos(this.pagina);
    } catch (error) {
      console.log(error);
    }
  }

  editarProducto(idProducto: number) {
    this.router.navigate(['admin/create-producto', idProducto]);
  }

  crearProducto() {
    this.router.navigate(['admin/create-producto']);
  }

  getProductos(pagina: number) {
    this.productoService.getAllProductos(pagina).subscribe(
      (allProductos) => {
        this.productos = allProductos.rows;
        this.countEntities = allProductos.rows.length;
        this.siguientePagina(this.pagina + 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cambiarPagina(num: number) {
    this.pagina = this.pagina + num;
    this.getProductos(this.pagina);
    this.siguientePagina(this.pagina + 1);
  }

  siguientePagina(sigPag: number) {
    let resp: number = 0;
    this.productoService.getAllProductos(sigPag).subscribe((allProductos) => {
      resp = allProductos.rows.length;
      if (resp > 0) {
        this.next = true;
      } else {
        this.next = false;
      }
    });
  }
}

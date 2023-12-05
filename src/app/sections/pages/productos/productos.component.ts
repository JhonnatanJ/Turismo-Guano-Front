import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entities/paged-producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'sections-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit{

  countEntities: number = 0;
  next: boolean = false;
  pagina: number = 1;

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    try {
      this.getProductos(this.pagina);
    } catch (error) {
      this.countEntities = 0;
      this.productos = [];
      console.log(error);
    }
  }

  getProductos(pagina: number) {
    this.productoService.getAllProductos(pagina).subscribe(
      (allProductos) => {
        this.countEntities = allProductos.rows.length;
        this.productos = allProductos.rows;
        this.siguientePagina(this.pagina+1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cambiarPagina(num: number) {
    this.pagina = this.pagina + num;
    this.getProductos(this.pagina);
    this.siguientePagina(this.pagina+1)
  }

  siguientePagina(sigPag: number) {
    let resp: number = 0;
    this.productoService
      .getAllProductos(sigPag)
      .subscribe((allProductos) => {
        resp = allProductos.rows.length;
        if (resp > 0) {
          this.next = true;
        } else {
          this.next = false;
        }
      });
  }
}

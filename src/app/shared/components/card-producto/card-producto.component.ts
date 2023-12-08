import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/entities/paged-producto.interface';

@Component({
  selector: 'shared-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css'],
})
export class CardProductoComponent {
  constructor(private router: Router) {}

  @Input() producto!: Producto;

  verProducto(idProducto: number) {
    this.router.navigate(['producto', idProducto]);
  }
}

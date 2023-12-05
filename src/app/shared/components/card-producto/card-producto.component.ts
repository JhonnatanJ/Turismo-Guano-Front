import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/entities/paged-producto.interface';

@Component({
  selector: 'shared-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css'],
})
export class CardProductoComponent {

  @Input() producto!: Producto;
}

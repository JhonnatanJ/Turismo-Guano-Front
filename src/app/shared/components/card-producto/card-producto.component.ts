import { Component, Input } from '@angular/core';

interface Producto {
  nombre: string;
  etiqueta: string;
  imagen: string;
  descripcion: string;
  likes: number;
  precio: number;
}

@Component({
  selector: 'shared-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css'],
})
export class CardProductoComponent {

  @Input() producto!: Producto;

  // producto: Producto = {
  //   nombre: 'Funda de leche - 1 litro',
  //   etiqueta: 'Leche',
  //   imagen:
  //   'https://www.supermercadosantamaria.com/documents/10180/10504/79347_G.jpg',
  //   descripcion: 'Funda de leche de 1 litro con normas de calidad adecuadas',
  //   likes: 15,
  //   precio: 1.2,
  // };
}

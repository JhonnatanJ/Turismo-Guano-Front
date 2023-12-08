import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entities/Producto';
import { Actividad } from 'src/app/entities/paged-actividad.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { TurismoService } from 'src/app/services/turismo.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  opciones = ['Turismo', 'Productos'];
  opcionBusqueda = 'Turismo';
  termino: string = '';

  countEntities: number = 0;
  next: boolean = false;
  pagina: number = 1;

  actividades!: Actividad[];
  productos!: Producto[];

  constructor(
    private productoService: ProductoService,
    private turismoService: TurismoService
  ) {}

  ngOnInit(): void {
    this.countEntities = 0;
    this.next = false;
    this.pagina = 1;
  }

  onSubmit() {
    if (this.opcionBusqueda === 'Turismo') {
      this.getTurismo(this.termino, this.pagina);
      this.productos = [];
    } else {
      this.getProductos(this.termino, this.pagina);
      this.actividades = [];
    }
  }

  getTurismo(termino: string, pagina: number) {
    this.turismoService
      .getActividadesByNombre(termino, pagina)
      .subscribe((allActividades) => {
        this.actividades = allActividades.rows;
        this.termino = '';
      });
  }

  getProductos(termino: string, pagina: number) {
    this.productoService
      .getProductosByNombre(termino, pagina)
      .subscribe((allProductos) => {
        this.productos = allProductos.rows;
        this.termino = '';
      });
  }
}

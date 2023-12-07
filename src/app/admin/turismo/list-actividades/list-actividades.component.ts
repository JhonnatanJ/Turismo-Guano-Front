import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/entities/paged-actividad.interface';
import { TurismoService } from 'src/app/services/turismo.service';
import { ImagenService } from '../../../services/imagen.service';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css'],
})
export class ListActividadesComponent implements OnInit {
  countEntities: number = 0;
  next: boolean = false;
  pagina: number = 1;

  actividades!: Actividad[];

  constructor(
    private turismoService: TurismoService,
    private imagenService: ImagenService,
    private router: Router
  ) {}
  ngOnInit(): void {
    try {
      this.getActividades(this.pagina);
    } catch (error) {
      console.log(error);
    }
  }

  crearActividad() {
    this.router.navigate(['admin/create-actividad']);
  }

  editarActividad(idActividad: number) {
    this.router.navigate(['admin/create-actividad', idActividad]);
  }

  deleteProducto(idImagen: number, idActividad: number) {
    this.imagenService.deleteImagen(idImagen).subscribe(
      (statusImagen) => {
        console.log(statusImagen);
        this.turismoService.deleteActividad(idActividad).subscribe(
          (statusActividad) => {
            console.log(statusActividad);
            this.ngOnInit();
          }
        )
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getActividades(pagina: number) {
    this.turismoService.getAllActividades(pagina).subscribe(
      (allActividades) => {
        this.actividades = allActividades.rows;
        this.countEntities = allActividades.rows.length;
        this.siguientePagina(this.pagina + 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // ----------------------------------------------------- PAGINADO

  cambiarPagina(num: number) {
    this.pagina = this.pagina + num;
    this.getActividades(this.pagina);
    this.siguientePagina(this.pagina + 1);
  }

  siguientePagina(sigPag: number) {
    let resp: number = 0;
    this.turismoService
      .getAllActividades(sigPag)
      .subscribe((allActividades) => {
        resp = allActividades.rows.length;
        if (resp > 0) {
          this.next = true;
        } else {
          this.next = false;
        }
      });
  }
}

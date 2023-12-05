import { Component, OnInit } from '@angular/core';

import { Actividad } from 'src/app/entities/paged-actividad.interface';

import { TurismoService } from 'src/app/services/turismo.service';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css'],
})
export class TurismoComponent implements OnInit {
  countEntities: number = 0;
  next: boolean = false;
  pagina: number = 1;

  actividades: Actividad[] = [];

  constructor(private turismoService: TurismoService) {}

  ngOnInit(): void {
    try {
      this.getActividades(this.pagina);
    } catch (error) {
      this.countEntities = 0;
      this.actividades = [];
      console.log(error);
    }
  }

  getActividades(pagina: number) {
    this.turismoService.getAllActividades(pagina).subscribe(
      (allActividades) => {
        this.countEntities = allActividades.rows.length;
        this.actividades = allActividades.rows;
        this.siguientePagina(this.pagina+1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cambiarPagina(num: number) {
    this.pagina = this.pagina + num;
    this.getActividades(this.pagina);
    this.siguientePagina(this.pagina+1)
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

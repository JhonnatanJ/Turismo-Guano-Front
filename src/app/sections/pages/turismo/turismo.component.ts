import { Component, OnInit } from '@angular/core';

import { Actividad } from 'src/app/entities/paged-actividad.interface';

import { TurismoService } from 'src/app/services/turismo.service';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css'],
})
export class TurismoComponent implements OnInit {
  private countEntities: number = 0;
  actividades: Actividad[] = [];

  constructor(private turismoService: TurismoService) {}

  ngOnInit(): void {
    try {
      this.getActividades(1);
    } catch (error) {
      this.countEntities = 0;
      this.actividades = [];
      console.log(error);
    }
  }

  getActividades(pagina: number) {
    this.turismoService.getAllActividades(pagina).subscribe(
      (allActividades) => {
        this.countEntities = allActividades.count;
        this.actividades = allActividades.rows;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

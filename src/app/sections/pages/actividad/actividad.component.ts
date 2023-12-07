import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Actividad } from 'src/app/entities/Actividad';
import { TurismoService } from 'src/app/services/turismo.service';
import { Comentario } from '../../../entities/Comentario';
import { CreateComentarioDto } from 'src/app/entities/dto/comentario.dto';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css'],
})
export class ActividadComponent implements OnInit {
  actividad: Actividad = new Actividad();

  idActividad!: number;

  constructor(
    private router: Router,
    private _router: ActivatedRoute,
    private turismoService: TurismoService,
    private comentarioService: ComentarioService
  ) {}

  ngOnInit(): void {
    this.idActividad = parseInt(this._router.snapshot.paramMap.get('id')!);

    if (this.idActividad) {
      this.getActividadById(this.idActividad);
    }
  }

  getActividadById(idActividad: number) {
    this.turismoService.getActividadById(idActividad).subscribe(
      (actividad) => {
        this.actividad = actividad;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  agregarComentario(comentarioForm: NgForm){
    const auxComentario:CreateComentarioDto = {mensaje: comentarioForm.value.comentario}
    this.comentarioService.createComentario(auxComentario, this.actividad.id_punto).subscribe(
      (comentario) => {
        this.actividad.Comentarios.push(comentario);
      },
      (err) => {
        console.log(err);
      }
      );
  }
}

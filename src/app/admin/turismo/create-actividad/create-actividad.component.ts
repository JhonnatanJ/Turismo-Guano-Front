import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateActividadDto } from 'src/app/entities/dto/turismo/create-actividad.dto';
import { CreateComentarioDto } from 'src/app/entities/dto/turismo/create-comentario.dto';
import { CreateEtiquetaDto } from 'src/app/entities/dto/turismo/create-etiqueta.dto';
import {
  Actividad,
  Etiqueta,
} from 'src/app/entities/paged-actividad.interface';
import { ComentarioService } from 'src/app/services/comentario.service';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { TurismoService } from 'src/app/services/turismo.service';
import { ImagenService } from '../../../services/imagen.service';

@Component({
  selector: 'app-create-actividad',
  templateUrl: './create-actividad.component.html',
  styleUrls: ['./create-actividad.component.css'],
})
export class CreateActividadComponent implements OnInit {
  etiqueta!: Etiqueta;
  actividad!: Actividad;

  paso1: boolean = true;
  paso2: boolean = false;
  paso3: boolean = false;

  constructor(
    private etiquetaService: EtiquetaService,
    private turismoService: TurismoService,
    private imagenService: ImagenService,
    private comentarioService: ComentarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paso1 = true;
    this.paso2 = false;
    this.paso3 = false;
  }

  // ** ------------------------------------------------------------------- PASO 1
  onSubmit(etiquetaForm: NgForm) {
    const auxEtiqueta = etiquetaForm.value.etiqueta;
    try {
      this.getEtiqueta(auxEtiqueta);
      this.createEtiqueta(auxEtiqueta);
    } catch (err) {
      console.log('Error Total:', err);
    }
  }

  getEtiqueta(nombre: string) {
    this.etiquetaService.getEtiquetaPorNombre(nombre).subscribe((etiqueta) => {
      this.etiqueta = etiqueta;
      this.paso1Completo();
    });
  }

  createEtiqueta(nombre: string) {
    const createEtiqueta: CreateEtiquetaDto = { nombre };
    this.etiquetaService
      .createEtiqueta(createEtiqueta)
      .subscribe((etiqueta) => {
        this.etiqueta = etiqueta;
        this.paso1Completo();
      });
  }
  //-------------------------------------------- pasos completados

  paso1Completo() {
    this.paso1 = false;
    this.paso2 = true;
    this.paso3 = false;
  }

  // ** ------------------------------------------------------------------- PASO 2

  onSubmit2(infoForm: NgForm) {
    try {
      const auxActividad: CreateActividadDto = {
        nombres: infoForm.value.nombre,
        descripcion: infoForm.value.descripcion,
        likes: 1,
        id_usuario: JSON.parse(sessionStorage.getItem('usuario')!).id_usuario,
        id_etiqueta: this.etiqueta.id_etiqueta,
      };
      this.createActividad(auxActividad);
    } catch (error) {
      console.log(error);
    }
  }

  createActividad(actividad: CreateActividadDto) {
    this.turismoService.createActividad(actividad).subscribe(
      (actividad) => {
        this.actividad = actividad;
        this.paso2Completo();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //-------------------------------------------- pasos completados

  paso2Completo() {
    this.paso1 = false;
    this.paso2 = false;
    this.paso3 = true;
  }

  // * ------------------------------------------------------------------ PASO 3

  imagen!: File;
  imagenMin!: File;

  onSubmit3() {
    this.imagenService
      .createImagenTurismo(this.imagen, this.actividad.id_punto)
      .subscribe(
        (imagen) => {
          const comentario: CreateComentarioDto = {
            mensaje: 'Recomendado, un excelente sitio para el turismo.',
          };
          this.comentarioService.createComentario(
            comentario,
            this.actividad.id_punto
          );
          this.paso3Completo();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onFileChange(event: Event) {
    this.imagen = (<HTMLInputElement>event.target).files![0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  reset(imageForm: NgForm) {
    this.imagen != null;
    this.imagenMin != null;
    imageForm.reset();
  }
  //-------------------------------------------- pasos completados

  paso3Completo() {
    this.paso3 = false;
    this.router.navigate(['admin']);
  }
}

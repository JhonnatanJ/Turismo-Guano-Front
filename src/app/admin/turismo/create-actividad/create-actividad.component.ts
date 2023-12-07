import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateActividadDto } from 'src/app/entities/dto/turismo/create-actividad.dto';
import { CreateComentarioDto } from 'src/app/entities/dto/turismo/create-comentario.dto';
import { CreateEtiquetaDto } from 'src/app/entities/dto/turismo/create-etiqueta.dto';

import { ComentarioService } from 'src/app/services/comentario.service';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { TurismoService } from 'src/app/services/turismo.service';
import { ImagenService } from '../../../services/imagen.service';
import { Etiqueta } from 'src/app/entities/Etiqueta';
import { Actividad } from 'src/app/entities/Actividad';
import { UpdateEtiquetaDto } from 'src/app/entities/dto/turismo/update-etiqueta.dto';
import { UpdateActividadDto } from 'src/app/entities/dto/turismo/update-actividad.dto';

@Component({
  selector: 'app-create-actividad',
  templateUrl: './create-actividad.component.html',
  styleUrls: ['./create-actividad.component.css'],
})
export class CreateActividadComponent implements OnInit {
  etiqueta!: Etiqueta;
  actividad!: Actividad;

  idActividad!: number;

  paso1: boolean = true;
  paso2: boolean = false;
  paso3: boolean = false;

  constructor(
    private etiquetaService: EtiquetaService,
    private turismoService: TurismoService,
    private imagenService: ImagenService,
    private comentarioService: ComentarioService,
    private _router: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paso1 = true;
    this.paso2 = false;
    this.paso3 = false;

    this.idActividad = parseInt(this._router.snapshot.paramMap.get('id')!);

    if (this.idActividad) {
      this.getActividadById(this.idActividad);
    }
  }

  // !--------------------------------------------------------------------------------- EDIT'

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

  updateEtiqueta() {
    const auxEtiqueta: UpdateEtiquetaDto = {
      newNombre: this.actividad.Etiqueta.nombre_etiqueta,
    };
    this.etiquetaService
      .updateEtiqueta(auxEtiqueta, this.actividad.Etiqueta.id_etiqueta)
      .subscribe(
        (etiqueta) => {
          this.etiqueta = etiqueta;
          console.log(this.etiqueta);
          this.router.navigate(['admin']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  updateActividad() {
    const auxActividad: UpdateActividadDto = {
      newNombre: this.actividad.nombres_punto,
      newDescripcion: this.actividad.descripcion_punto,
      newLikes: this.actividad.likes_punto,
      id_usuario: this.actividad.id_usuario,
      id_etiqueta: this.actividad.Etiqueta.id_etiqueta,
    };
    this.turismoService
      .updateActividad(auxActividad, this.actividad.id_punto)
      .subscribe(
        (actividad) => {
          this.actividad = actividad;
          this.router.navigate(['admin'])
        },
        (err) => {
          console.log(err);
        }
      );
  }

  updateImagen(){
    this.imagenService
    .updateImagenActividad(
      this.imagen,
      this.actividad.Imagenes[0].id_imagen,
      this.actividad.id_punto
    )
    .subscribe(
      (imagen) => {
        this.paso3Completo();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // ** -------------------------- PASOS

  avanzarPaso1() {
    this.paso1 = false;
    this.paso2 = true;
    this.paso3 = false;
  }

  regresarPaso2() {
    this.paso1 = true;
    this.paso2 = false;
    this.paso3 = false;
  }

  avanzarPaso2() {
    this.paso1 = false;
    this.paso2 = false;
    this.paso3 = true;
  }
  regresarPaso3() {
    this.paso1 = false;
    this.paso2 = true;
    this.paso3 = false;
  }

  // !--------------------------------------------------------------------------------- CRUD

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

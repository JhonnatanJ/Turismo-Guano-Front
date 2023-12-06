import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateActividadDto } from 'src/app/entities/dto/turismo/create-actividad.dto';
import { CreateEtiquetaDto } from 'src/app/entities/dto/turismo/create-etiqueta.dto';
import {
  Actividad,
  Etiqueta,
} from 'src/app/entities/paged-actividad.interface';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { TurismoService } from 'src/app/services/turismo.service';

@Component({
  selector: 'app-create-actividad',
  templateUrl: './create-actividad.component.html',
  styleUrls: ['./create-actividad.component.css'],
})
export class CreateActividadComponent {
  etiqueta!: Etiqueta;
  actividad!: Actividad;

  paso1: boolean = true;
  paso2: boolean = false;
  paso3: boolean = false;

  constructor(
    private etiquetaService: EtiquetaService,
    private turismoService: TurismoService
  ) {}

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
    this.turismoService
      .createImagen(this.imagen, this.actividad.id_punto)
      .subscribe(
        (imagen) => {
          console.log('Imagen Creada');
          // todo cargar comentario
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
    this.paso1 = false;
    this.paso2 = false;
    this.paso3 = true;
  }
}

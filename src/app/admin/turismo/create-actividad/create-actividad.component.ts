import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateEtiquetaDto } from 'src/app/entities/dto/turismo/create-etiqueta.dto';
import { Etiqueta } from 'src/app/entities/paged-actividad.interface';
import { EtiquetaService } from 'src/app/services/etiqueta.service';

@Component({
  selector: 'app-create-actividad',
  templateUrl: './create-actividad.component.html',
  styleUrls: ['./create-actividad.component.css'],
})
export class CreateActividadComponent {
  etiqueta!: Etiqueta;

  paso1: boolean = true;
  paso2: boolean = false;
  paso3: boolean = false;

  constructor(private etiquetaService: EtiquetaService) {}

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
    this.etiquetaService.getEtiquetaPorNombre(nombre).subscribe(
      (etiqueta) => {
      this.etiqueta = etiqueta;
      this.paso1Completo();
      }
    );
  }

  createEtiqueta(nombre: string) {
    const createEtiqueta: CreateEtiquetaDto = {nombre};
    this.etiquetaService.createEtiqueta(createEtiqueta).subscribe(
      (etiqueta) => {
        this.etiqueta = etiqueta;
        this.paso1Completo()
      }
    );
  }
  //------------------------------------------------ pasos completados

  paso1Completo() {
    this.paso1 = false;
    this.paso2 = true;
    this.paso3 = false;
  }
}

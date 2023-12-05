import { Component, Input } from '@angular/core';
import { Actividad } from 'src/app/entities/paged-actividad.interface';

@Component({
  selector: 'shared-card-turismo',
  templateUrl: './card-turismo.component.html',
  styleUrls: ['./card-turismo.component.css'],
})
export class CardTurismoComponent {
  @Input() actividad!: Actividad;
}

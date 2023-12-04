import { Component, Input } from '@angular/core';


interface Actividad{
  nombre: string;
  etiqueta: string;
  imagen: string;
  descripcion: string;
  likes: number;
}

@Component({
  selector: 'shared-card-turismo',
  templateUrl: './card-turismo.component.html',
  styleUrls: ['./card-turismo.component.css']
})
export class CardTurismoComponent {

  @Input() actividad!: Actividad;

  // actividad = {
  //   etiqueta: 'Senderismo',
  //   imagen:
  //     'https://img.freepik.com/foto-gratis/paisaje-colina-cubierta-vegetacion-excursionistas-subiendola-cielo-nublado_181624-13407.jpg?w=1060&t=st=1701654111~exp=1701654711~hmac=44acbd5200bda637e519cc0c32ef5963efe521eebf820f8e71b86d9ae147fcea',
  //   nombre: 'Las Lagunas Mágicas de San Rafael: Ruta Piedra Bolivar',
  //   descripcion:
  //     'Bienvenido, esta actividad presente en la ruta Piedra Bolivar inicia con la salida en Consectetur velit est nulla est dolore occaecat amet aliqua excepteur irure. Pariatur in id reprehenderit ullamco nulla tempor ex quis et dolore. Duis do nulla duis elit ex magna. Consectetur in pariatur proident irure fugiat adipisicing consequat aliqua anim velit excepteur id...',
  //   likes: 20,
  // };


}

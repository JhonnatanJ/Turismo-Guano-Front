import { Component } from '@angular/core';

interface Actividad{
  nombre: string;
  etiqueta: string;
  imagen: string;
  descripcion: string;
  likes: number;
}

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css'],
})
export class TurismoComponent {


  miActividad: Actividad = {
    etiqueta: 'Senderismo',
    imagen:
      'https://img.freepik.com/foto-gratis/estilo-vida-viajar-vista-mujer-joven_1150-969.jpg?w=360&t=st=1701727195~exp=1701727795~hmac=daa9f9557fa3be05d512dec01b8c7c27052f31502e00d1ed0b03b061695b5f37',
    nombre: 'Las Lagunas Mágicas de San Rafael: Ruta Piedra Bolivar',
    descripcion:
      'Bienvenido, esta actividad presente en la ruta Piedra Bolivar inicia con la salida en Consectetur velit est nulla est dolore occaecat amet aliqua excepteur irure. Pariatur in id reprehenderit ullamco nulla tempor ex quis et dolore. Duis do nulla duis elit ex magna. Consectetur in pariatur proident irure fugiat adipisicing consequat aliqua anim velit excepteur id...',
    likes: 20,
  };

  actividades = [
    this.miActividad,
    this.miActividad,
    this.miActividad,
    this.miActividad,
    this.miActividad,
    this.miActividad,
    this.miActividad,
    this.miActividad,
  ];

  // TODO: HACER PAGINADO!!!!
}

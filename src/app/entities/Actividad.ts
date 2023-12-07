import { Comentario } from "./Comentario";
import { Etiqueta } from "./Etiqueta";
import { Imagen } from "./Imagen";
import { Usuario } from "./Usuario";

export class Actividad{
  id_punto!: number;
  nombres_punto!: string;
  descripcion_punto!: string;
  likes_punto!: number;
  createdAt!: Date;
  updatedAt!: Date;
  id_etiqueta!: number;
  id_usuario!: number;
  Usuario!: Usuario;
  Etiqueta!: Etiqueta;
  Imagenes!: Imagen[];
  Comentarios!: Comentario[];
}

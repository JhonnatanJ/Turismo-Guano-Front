import { Imagen } from "./Imagen";
import { Usuario } from "./Usuario";

export class Producto{
  id_producto!:          number;
  nombres_producto!:     string;
  etiqueta_producto!:    string;
  precio_producto!:      number;
  descripcion_producto!: string;
  likes_producto!:       number;
  createdAt!:            Date;
  updatedAt!:            Date;
  id_usuario!:           number;
  Usuario!:              Usuario;
  Imagenes!:             Imagen[];
}

export interface PagedActividades {
  count:       number;
  rows: Actividad[];
}

export interface Actividad {
  id_punto:          number;
  nombres_punto:     string;
  descripcion_punto: string;
  likes_punto:       number;
  createdAt:         Date;
  updatedAt:         Date;
  id_etiqueta:       number;
  id_usuario:        number;
  Usuario:           Usuario;
  Etiqueta:          Etiqueta;
  Imagenes:          Imagen[];
  Comentarios:       any[];
}

export interface Etiqueta {
  id_etiqueta:     number;
  nombre_etiqueta: string;
}

export interface Imagen {
  id_imagen:            number;
  url_imagen:           string;
  id_imagen_cloudinary: string;
  id_producto:          null;
  id_punto:             number;
}

export interface Usuario {
  id_usuario:          number;
  nombres_usuario:     string;
  apellidos_usuario:   string;
  email_usuario:       string;
  contrasenia_usuario: string;
  createdAt:           Date;
  updatedAt:           Date;
}

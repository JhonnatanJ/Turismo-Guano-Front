export interface PagedProductos {
  count:     number;
  productos: Producto[];
}

export interface Producto {
  id_producto:          number;
  nombres_producto:     string;
  etiqueta_producto:    string;
  precio_producto:      number;
  descripcion_producto: string;
  likes_producto:       number;
  createdAt:            Date;
  updatedAt:            Date;
  id_usuario:           number;
  Usuario:              Usuario;
  Imagenes:             Imagen[];
}

export interface Imagen {
  id_imagen:            number;
  url_imagen:           string;
  id_imagen_cloudinary: string;
  id_producto:          number;
  id_punto:             null;
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

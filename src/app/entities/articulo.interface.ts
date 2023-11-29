export interface Articulo {
  id_articulo:          number;
  nombres_articulo:     string;
  etiqueta_articulo:    string;
  descripcion_articulo: string;
  likes_articulo:       number;
  createdAt:            Date;
  updatedAt:            Date;
  Producto:             Producto | null;
  Imagenes:             Imagen[];
}

export interface Imagen {
  id_imagen:            number;
  url_imagen:           string;
  id_imagen_cloudinary: string;
  id_articulo:          number;
}

export interface Producto {
  id_producto:     number;
  precio_producto: number;
  id_articulo:     number;
}

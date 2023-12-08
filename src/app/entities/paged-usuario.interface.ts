export interface PagedUsuario {
  count: number;
  rows:  Usuario[];
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

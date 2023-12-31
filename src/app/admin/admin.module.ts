import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListActividadesComponent } from './turismo/list-actividades/list-actividades.component';
import { CreateActividadComponent } from './turismo/create-actividad/create-actividad.component';
import { ListProductosComponent } from './productos/list-productos/list-productos.component';
import { CreateProductoComponent } from './productos/create-producto/create-producto.component';
import { CreateUsuarioComponent } from './usuario/create-usuario/create-usuario.component';
import { ListUsuariosComponent } from './usuario/list-usuarios/list-usuarios.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ListActividadesComponent,
    CreateActividadComponent,
    ListProductosComponent,
    CreateProductoComponent,
    CreateUsuarioComponent,
    ListUsuariosComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}

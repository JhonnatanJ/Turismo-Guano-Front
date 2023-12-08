import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActividadesComponent } from './turismo/list-actividades/list-actividades.component';
import { ListProductosComponent } from './productos/list-productos/list-productos.component';
import { CreateActividadComponent } from './turismo/create-actividad/create-actividad.component';
import { CreateProductoComponent } from './productos/create-producto/create-producto.component';
import { ListUsuariosComponent } from './usuario/list-usuarios/list-usuarios.component';
import { CreateUsuarioComponent } from './usuario/create-usuario/create-usuario.component';

const routes: Routes = [
  { path: '', component: ListActividadesComponent, pathMatch: 'full' },
  { path: 'create-actividad', component: CreateActividadComponent },
  { path: 'create-actividad/:id', component: CreateActividadComponent },
  { path: 'list-productos', component: ListProductosComponent },
  { path: 'create-producto', component: CreateProductoComponent },
  { path: 'create-producto/:id', component: CreateProductoComponent },
  { path: 'list-usuarios', component: ListUsuariosComponent },
  { path: 'create-usuario', component: CreateUsuarioComponent },
  { path: 'create-usuario/:id', component: CreateUsuarioComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

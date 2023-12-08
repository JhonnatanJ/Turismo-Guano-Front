import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ArticuloDestinosComponent } from './pages/articulo-destinos/articulo-destinos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { VerActividadComponent } from './pages/ver-actividad/ver-actividad.component';
import { FormsModule } from '@angular/forms';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';

@NgModule({
  declarations: [
    ArticuloDestinosComponent,
    ProductosComponent,
    HomeComponent,
    TurismoComponent,
    VerActividadComponent,
    VerProductoComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule, FormsModule],
  exports: [HomeComponent, ProductosComponent, ArticuloDestinosComponent, VerActividadComponent],
})
export class SectionsModule {}

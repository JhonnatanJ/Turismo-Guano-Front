import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ArticuloDestinosComponent } from './pages/articulo-destinos/articulo-destinos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { ActividadComponent } from './pages/actividad/actividad.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticuloDestinosComponent,
    ProductosComponent,
    HomeComponent,
    TurismoComponent,
    ActividadComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule, FormsModule],
  exports: [HomeComponent, ProductosComponent, ArticuloDestinosComponent, ActividadComponent],
})
export class SectionsModule {}

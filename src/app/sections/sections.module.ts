import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ArticuloDestinosComponent } from './pages/articulo-destinos/articulo-destinos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { TurismoComponent } from './pages/turismo/turismo.component';

@NgModule({
  declarations: [
    ArticuloDestinosComponent,
    ProductosComponent,
    HomeComponent,
    TurismoComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [HomeComponent, ProductosComponent, ArticuloDestinosComponent],
})
export class SectionsModule {}

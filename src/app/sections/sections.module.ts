import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloDestinosComponent } from './pages/articulo-destinos/articulo-destinos.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { ListCardComponent } from './components/list-card/list-card.component';



@NgModule({
  declarations: [
    ArticuloDestinosComponent,
    DestinosComponent,
    ProductosComponent,
    GridCardComponent,
    ListCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }

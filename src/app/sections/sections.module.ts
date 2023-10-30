import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloDestinosComponent } from './pages/articulo-destinos/articulo-destinos.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GridCardComponent } from './components/Temp/grid-card/grid-card.component';
import { ListCardComponent } from './components/Temp/list-card/list-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ListCardDestinoComponent } from './components/list-card-destino/list-card-destino.component';
import { GridCardDestinoComponent } from './components/grid-card-destino/grid-card-destino.component';
import { GridCardProductosComponent } from './components/grid-card-productos/grid-card-productos.component';
import { ListCardProductosComponent } from './components/list-card-productos/list-card-productos.component';
import { ColumnDestinoComponent } from './components/columns/column-destino/column-destino.component';
import { ColumnProductoComponent } from './components/columns/column-producto/column-producto.component';



@NgModule({
  declarations: [
    ArticuloDestinosComponent,
    DestinosComponent,
    ProductosComponent,
    GridCardComponent,
    ListCardComponent,
    HomeComponent,
    ListCardDestinoComponent,
    GridCardDestinoComponent,
    GridCardProductosComponent,
    ListCardProductosComponent,
    ColumnDestinoComponent,
    ColumnProductoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    HomeComponent,
    DestinosComponent,
    ProductosComponent,
    ArticuloDestinosComponent
  ]
})
export class SectionsModule { }

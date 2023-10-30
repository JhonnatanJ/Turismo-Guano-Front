import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloDestinosComponent } from './pages/articulo-destinos/articulo-destinos.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ListCardDestinoComponent } from './components/list-card-destino/list-card-destino.component';



@NgModule({
  declarations: [
    ArticuloDestinosComponent,
    DestinosComponent,
    ProductosComponent,
    GridCardComponent,
    ListCardComponent,
    HomeComponent,
    ListCardDestinoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    HomeComponent
  ]
})
export class SectionsModule { }

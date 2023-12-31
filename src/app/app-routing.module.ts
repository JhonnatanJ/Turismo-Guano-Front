import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './sections/pages/home/home.component';
import { ProductosComponent } from './sections/pages/productos/productos.component';
import { ContactenosComponent } from './contacts/pages/contactenos/contactenos.component';
import { AdminComponent } from './admin/admin.component';
import { TurismoComponent } from './sections/pages/turismo/turismo.component';
import { VerActividadComponent } from './sections/pages/ver-actividad/ver-actividad.component';
import { VerProductoComponent } from './sections/pages/ver-producto/ver-producto.component';
import { BuscarComponent } from './sections/pages/buscar/buscar.component';
import { CaracteristicasRutaComponent } from './sections/pages/turismo-info/caracteristicas-ruta/caracteristicas-ruta.component';
import { PaqueteRutaComponent } from './sections/pages/turismo-info/paquete-ruta/paquete-ruta.component';
import { CostosRutaComponent } from './sections/pages/turismo-info/costos-ruta/costos-ruta.component';
import { ContactoComponent } from './sections/pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'actividad/:id',
    component: VerActividadComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'producto/:id',
    component: VerProductoComponent,
  },
  {
    path: 'contactenos',
    component: ContactoComponent,
  },
  {
    path: 'busqueda',
    component: BuscarComponent,
  },
  {
    path: 'turismo',
    component: TurismoComponent,
  },
  {
    path: 'caracteristica-ruta',
    component: CaracteristicasRutaComponent,
  },
  {
    path: 'paquete-ruta',
    component: PaqueteRutaComponent,
  },
  {
    path: 'costo-ruta',
    component: CostosRutaComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

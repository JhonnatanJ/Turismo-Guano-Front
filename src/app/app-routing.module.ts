import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './sections/pages/home/home.component';
import { ProductosComponent } from './sections/pages/productos/productos.component';
import { ContactenosComponent } from './contacts/pages/contactenos/contactenos.component';
import { AdminComponent } from './admin/admin.component';
import { TurismoComponent } from './sections/pages/turismo/turismo.component';
import { VerActividadComponent } from './sections/pages/ver-actividad/ver-actividad.component';
import { VerProductoComponent } from './sections/pages/ver-producto/ver-producto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'turismo',
    component: TurismoComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'contactenos',
    component: ContactenosComponent,
  },
  {
    path: 'actividad/:id',
    component: VerActividadComponent,
  },
  {
    path: 'producto/:id',
    component: VerProductoComponent,
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

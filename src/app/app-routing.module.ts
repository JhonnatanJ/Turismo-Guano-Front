import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './sections/pages/home/home.component';
import { ProductosComponent } from './sections/pages/productos/productos.component';
import { ContactenosComponent } from './contacts/pages/contactenos/contactenos.component';
import { AdminComponent } from './admin/admin.component';
import { TurismoComponent } from './sections/pages/turismo/turismo.component';
import { ActividadComponent } from './sections/pages/actividad/actividad.component';

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
    component: ActividadComponent,
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

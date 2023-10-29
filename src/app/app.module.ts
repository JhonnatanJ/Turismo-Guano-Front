import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/pages/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CarruselComponent } from './shared/components/carrusel/carrusel.component';
import { CardComponent } from './shared/components/card/card.component';
import { DestinosComponent } from './sections/pages/destinos/destinos.component';
import { ProductosComponent } from './sections/pages/productos/productos.component';
import { ArticuloDestinosComponent } from './sections/pages/articulo-destinos/articulo-destinos.component';
import { GridCardComponent } from './sections/components/grid-card/grid-card.component';
import { ListCardComponent } from './sections/components/list-card/list-card.component';
import { FormularioComponent } from './contacts/components/formulario/formulario.component';
import { ContactenosComponent } from './contacts/pages/contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

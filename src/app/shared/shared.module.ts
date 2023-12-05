import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { CardTurismoComponent } from './components/card-turismo/card-turismo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    CardTurismoComponent,
    CardProductoComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [
    HeaderComponent,
    CarruselComponent,
    FooterComponent,
    CardTurismoComponent,
    CardProductoComponent,
  ],
})
export class SharedModule {}

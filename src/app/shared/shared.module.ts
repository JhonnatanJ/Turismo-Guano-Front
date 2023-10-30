import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardComponent } from './components/card/card.component';
import { CardDestinoComponent } from './components/card-destino/card-destino.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    CardComponent,
    CardDestinoComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    CarruselComponent,
    CardComponent,
    FooterComponent,

    CardDestinoComponent
  ]
})
export class SharedModule { }

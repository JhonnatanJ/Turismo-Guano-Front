import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

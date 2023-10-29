import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ContactenosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }

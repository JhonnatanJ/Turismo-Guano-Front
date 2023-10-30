import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactenosComponent
  ]
})
export class ContactsModule { }
